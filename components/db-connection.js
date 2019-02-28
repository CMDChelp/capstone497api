const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { mongo_vars } = require('./params');

class db {
    constructor(){
        this.url = mongo_vars.url;
        this.dbName = mongo_vars.dbName;
        this.client;
        this.created = false;
        this.start = this.start.bind(this);
    }

    start(){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url).then((con) => {
                this.db = con.db(this.dbName);
                this.client = this.db;
                resolve(this.client);
            }).catch(e => {
                console.error(__error, e);
                reject(e);
            });
        });
    }

    collections(){
        if(this.client){
            return {
                admin_users: this.client.collection('admin_users'),
                users: this.client.collection('users'),
                videos: this.client.collection('videos'),
                locations: this.client.collection('locations'),
                ar: this.client.collection('ar'),
                stories: this.client.collection('stories'),
                audio: this.client.collection('audio'),
                errors: this.client.collection('errors'),
                user_events: this.client.collection('user_events'),
            }
        }
    }
}

module.exports = new db();