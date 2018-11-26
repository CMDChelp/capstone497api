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
                clients: this.client.collection('clients'),
                users: this.client.collection('users'),
                properties: this.client.collection('properties'),
                slips: this.client.collection('slips'),
                documents: this.client.collection('documents'),
                transactions: this.client.collection('transactions'),
                hotels: this.client.collection('hotels'),
                errors: this.client.collection('errors'),
                user_events: this.client.collection('user_events'),
                bookings: this.client.collection('bookings'),
            }
        }
    }
}

module.exports = new db();