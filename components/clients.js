const { clients } = require('./db-connection').collections();
const ObjectId = require('mongodb').ObjectID;
const { verifyToken } = require('../utils/user-utils');
const { CLIENT_STATUS, STRIPE_STATUS } = require('./constants');

const clientPrototype = {
    _id: 'generated',
    name: 'business name',
    sub_name: "secondary name of business",
    address: 'address line 1',
    address2: 'address line 2',
    city: 'city',
    municipality: 'state/province',
    country: 'USA',
    owner: 'user._id of owner',
    color_logo: 'color logo to appear on white BG',
    white_logo: 'white logo to appear on dark BG',
    images: ["array of property images"],
    location: {
        type: "point",
        coordinates: [-73.9375, 40.8303] //that's long first THEN lat
    },
    stripe_id: 'stripe merchant id',
    stripe_status: 'status of merchant from stripe',
    business_id: 'tax id of business',
    created_by: '_id of admin user creating account',
    created: 'date',
    modfied: 'date',
    status: 'active, inactive, deleted, whatever'
};


class Clients {
    createNew(res, token, name, address, address2 = null, city, municipality, country = "USA", owner = null, color_logo = null, white_logo = null, images = [], location = {}, stripe_id = null, business_id = null){
        const user = verifyToken(token);

        //only super admins can create new clients
        if(!user && !(user && user.is_super_admin)) return res.sendStatus(400);

        const clientObject = {
            name: name,
            address: address,
            address2: address2,
            city: city,
            municipality: municipality,
            country: country,
            owner: owner,
            color_logo: color_logo,
            white_logo: white_logo,
            images: images,
            location: location,
            stripe_id: stripe_id,
            stripe_status: STRIPE_STATUS.UNVERIFIED,
            business_id: business_id,
            created_by: user._id,
            created: new Date(),
            modfied: new Date(),
            status: CLIENT_STATUS.UNVERIFIED
        };

        clients.insertOne(clientObject, (err, inserted) => {
            if(err) {
                console.error(__error, err);
                res.sendStatus(500);
            } else {
                res.send(clientObject);
            }
        });
    }

    updateClient(res, token, id, clientObject) {
        const user = verifyToken(token);
        if(!user) return res.sendStatus(400);

        if(clientObject._id) {
            delete clientObject._id;
        }

        clients.updateOne({_id: ObjectId(id)}, {$set: clientObject}, (err, updated) => {
            if(err) {
                console.error(__error, err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    }

    getAllActiveClients(res, token) {
        const user = verifyToken(token);

        //only super admins can get entire list
        if(!user && !(user && user.is_super_admin)) return res.sendStatus(400);

        clients.find({status: {$ne: CLIENT_STATUS.DELETED}}).toArray().then(allClients => {
            res.send(allClients);
        }).catch(e => {
            console.error(__error, e);
            res.sendStatus(500);
        });
    }

    getAllDeletedClients(res, token) {
        const user = verifyToken(token);

        //only super admins can get entire list
        if(!user && !(user && user.is_super_admin)) return res.sendStatus(400);

        clients.find({status: CLIENT_STATUS.DELETED}).toArray().then(allClients => {
            res.send(allClients);
        }).catch(e => {
            console.error(__error, e);
            res.sendStatus(500);
        });
    }

    getClientsInRange(res, lat, long, distance) {
        clients.find({
            status: CLIENT_STATUS.VERIFIED, 
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat]
                    },
                    $maxDistance: distance,
                    $minDistance: 0
                }
            }
        }, {_id: 1, name: 1, location: 1}).toArray().then(results => {
            res.send(results);
        }).catch(e => {
            console.error(__error, e);
            res.send([]);
        });
    }

    getClient(res, _id) {
        clients.findOne({_id: ObjectId(_id)}).then(result => {
            res.send(result);
        }).catch(e => {
            console.error(__error, e);
            res.sendStatus(500);
        });
    }
}

module.exports = new Clients();