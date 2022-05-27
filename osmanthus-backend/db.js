// import User from './app/system/model/user.js';
// import sequelize from './core/datasource.js';
//
//
// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true
//
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// sequelize.close()

import express from 'express';

const app = express();
