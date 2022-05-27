import { Sequelize } from 'sequelize';
import { sqlite } from './database.js';


const sequelize = new Sequelize(sqlite);


export default sequelize;
