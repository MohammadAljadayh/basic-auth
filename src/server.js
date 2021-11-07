'use strict';

const express = require('express');
const server = express();

const notFoundHandler = require('./erorr-handlers/404');
const errorHandler = require('./erorr-handlers/500');
server.use(express.urlencoded({ extended: true }));

server.use(express.json());

const { signUp, signIn } = require('./auth/auth')

server.get('/', (req, res) => {
  res.status(200).send(' basic-auth server Root ')
})

server.post('/signup',signUp, async (req, res,next) => {
    res.status(200).json(req.record);
});

server.post('/signin', signIn, (req, res, next) => {

  res.status(200).json(req.user)

});

server.use('*', notFoundHandler);
server.use(errorHandler);

function start(PORT) {
  server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

module.exports = {
  server: server,
  start: start
};

