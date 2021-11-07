'use strict';

require('dotenv').config();

const POSTGRES_URI = process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./users-model')


// const sequelize = new Sequelize(POSTGRES_URI, {
//   dialectOptions: {
//       ssl: {
//           require: true,
//           rejectUnauthorized: false,
//       }
//   }
// });
const sequelize = new Sequelize(POSTGRES_URI);


module.exports = {
  db: sequelize,
  Users: Users(sequelize, DataTypes),
};