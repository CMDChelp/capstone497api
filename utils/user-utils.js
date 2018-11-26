const { secret_hash } = require('../components/params');
const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (token) => {
        let user;

        try {
            user = jwt.verify(token, secret_hash);
        } catch(e) {
            console.error(__error, e);
            return false;
        }

        return user;
    }
}