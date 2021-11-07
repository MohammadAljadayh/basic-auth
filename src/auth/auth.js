'use strict';

const { Users } = require('../models/index')

const bcrypt = require('bcrypt');
const base64 = require('base-64');

const signUp = async (req, res, next) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await Users.create(req.body);
        req.record = record;
        next();
    }  catch (e) { res.status(403).send("Error Creating User"); }

}


const signIn = async (req, res, next) => {

    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    try {
        const user = await Users.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.user = user;
            next();
        }
        else {
            next('Invalid username & password')
        }
    } catch (error) { res.status(403).send("Invalid Login"); }

}

module.exports = {
    signUp,
    signIn,
}