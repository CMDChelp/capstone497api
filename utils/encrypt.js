const { secret_hash } = require('../components/params');
const jwt = require('jsonwebtoken');

/**
 * 
 * @param {Object} user
 * 
 * This isn't cryptographically secure, we need a better way to 
 * create a more secure user token 
 */
exports.createToken = (user) => {
    const expiry = Math.floor(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

    user.exp = expiry;

    let token = jwt.sign(user, secret_hash);

    return token;
};

exports.getSecret = () => {
    return secret_hash;
}