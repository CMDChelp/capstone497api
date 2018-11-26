const path = require('path');

module.exports = {
    routes: (app) => {

        //require modules here so mongodb is initialized before loading them
        const users = require('./users');
        const clients = require('./clients');
        const admin_users = require('./admin-users');

        /**
         * 
         * User Routes
         * 
         */
        app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });

        app.post('/users/check-email', (req, res) => {
            users.checkEmail(res, req.body.email);
        });

        app.post('/users/sign-up', (req, res) => {
            users.signUp(res, req.body.email, req.body.password, req.body.phone, req.body.first_name, req.body.last_name, req.body.address, req.body.address2, req.body.postal_code, req.body.city, req.body.municipality, req.body.country, req.body.timezone);
        });

        app.post('/users/sign-in', (req, res) => {
            users.signIn(res, req.body.email, req.body.password);
        });

        app.post('/users/refresh-user', (req, res) => {
            users.refreshUser(res, req.body.token);
        });

        //this is a get route as it returns html and isn't a rest request
        app.get('/verify-user/:code', (req, res) => {
            users.verify(res, req.params.code);
        });

        app.post('/users/request-new-code', (req, res) => {
            users.requestNewCode(res, req.body.email);
        });

        app.post('/users/change-password', (req, res) => {
            users.changePassword(res, req.body.token, req.body.oldPassword, req.body.newPassword);
        });

        app.post('/users/forgot-password', (req, res) => {
            users.forgotPassword(res, req.body.email);
        });

        app.post('/users/reset-password', (req, res) => {
            users.resetPassword(res, req.body.code, req.body.newPassword);
        });

        app.post('/users/update-profile', (req, res) => {
            users.updateProfile(res, req.body.token, req.body.profile);
        });

        app.post('/users/request-code', (req, res) => {
            users.requestNewCode(res, req.body.email);
        });

        app.post('/debug/decode-token', (req, res) => {
            users.decodeToken(res, req.body.token);
        });
    }
}