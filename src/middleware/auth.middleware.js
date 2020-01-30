const error = require("../tools/error");
const jwt = require('jsonwebtoken');

module.exports.isAuthenticated = function (req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_TOKEN_SIGN);
        } catch (e) {
            throw new Error(error.sendError(401, ["Invalid token signature"]));
        }
        if (!decoded.id) {
            throw new Error(error.sendError(401, ["You are'nt connected"]));
        }
        req.params.userId = decoded.id;
    } else {
        throw new Error(error.sendError(401, ["You are'nt connected"]));
    }

    return next();
}

// TODO
module.exports.isFromUs = function (req, res, next) {
    const token = req.headers.authorization;

    // TODO verify that the token is valid from the Front-end and good Auth0 service
    return next();

    if (token) {

    } else {
        throw new Error(error.sendError(401, ["You are'nt from the good app"]));
    }

    return next();
}