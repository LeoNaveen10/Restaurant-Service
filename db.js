
const config = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize= new Sequelize(
     config.DB,
     config.USER,
     config.PASSWORD, 
    {
        host : config.HOST,
        dialect : config.DIALECT
    }
);
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.customer = require("./customer")(sequelize,Sequelize);
db.menu = require("./menu")(sequelize,Sequelize);
db.orders = require("./orders")(sequelize,Sequelize);

module.exports = db;
