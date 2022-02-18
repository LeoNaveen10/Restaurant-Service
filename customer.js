
module.exports = (sequelize, Sequelize) => {

    const customer = sequelize.define("customer", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contact: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return customer;
};