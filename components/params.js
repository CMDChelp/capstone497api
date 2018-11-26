const MongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DBName = process.env.DB_NAME || 'portEngine';
const hash = process.env.SECRET_HASH || "e96f7982ceed2bf50282eee676c51c2cff41c8c4e0cdcd986815cb84b27ea73a";

module.exports = {
    mongo_vars: {
        url: MongoUrl,
        dbName: DBName
    },
    secret_hash: hash
}
