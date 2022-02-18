
const restController = require("../controller/restcontroller");

module.exports =(app)=>{

    app.put("/restarunt/v1/customers",restController.CreateNewCustomer);
    app.put("/restarunt/v1/menus",restController.CreateMenu);
    
    app.delete("/restarunt/v1/menus/:name",restController.deleteMenu)
    app.delete("/restarunt/v1/customers/:name",restController.deleteCustomer)

    app.get("/restarunt/v1/customers",restController.findAllCustomer);
    app.get("/restarunt/v1/menus",restController.findAllMenu);

    app.put("/restarunt/v1/orders",restController.createOrder);

}