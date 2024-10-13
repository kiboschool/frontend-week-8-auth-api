const { expressjwt } = require('express-jwt');
const { JSON_SECRET_KEY } = require('./secrets')

function UseJwt() {
    return [
        expressjwt({ secret: JSON_SECRET_KEY, algorithms: ['HS256'] }),
        function (err, req, res, next) {
            res.status(err.status).json(err);
        }
    ]
}

module.exports = { UseJwt }