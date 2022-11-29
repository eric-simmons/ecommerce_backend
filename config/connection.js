require('dotenv').config();

const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PW } = process.env

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PW,{
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
      },
})

module.exports = sequelize;
