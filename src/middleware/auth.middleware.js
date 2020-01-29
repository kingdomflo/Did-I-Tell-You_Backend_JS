const error = require("../tools/error");
var jwt = require('jsonwebtoken');

module.exports.isAuthenticated = function (req, res, next) {
    const token = req.headers.authorization;

    // TODO see if it's a token from your's API
    if (token) {
        const decoded = jwt.decode(token);
        console.log(decoded);
        if (!decoded.id) {
            throw new Error(error.sendError(401, ["You are'nt connected"]));
        }
        req.params.userId = decoded.id;
    } else {
        throw new Error(error.sendError(401, ["You are'nt connected"]));
    }

    return next();
}