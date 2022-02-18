
module.exports = (sequelize,Sequelize)=>{

    const orders = sequelize.define("orders",{
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true 
        },

        customer_id :{
                type : Sequelize.INTEGER,
                allowNull : false,
                references : {
                    model :'customers',
                    key : 'id'  
                }
        },
        menu_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
            references : {
                model : "menus",
                key : "id"
            }
        }
    })
    return orders;
}