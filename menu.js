
module.exports=(sequelize,Sequelize)=>{

const menu = sequelize.define("menu",{
    id : {
         type : Sequelize.INTEGER,
         autoIncrement : true,
         primaryKey : true

    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    serving :{
        type : Sequelize.STRING,
        allowNull : false
    }
})
    return menu;
}