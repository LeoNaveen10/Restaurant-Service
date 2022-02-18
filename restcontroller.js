
const db = require("../model/db");

const customer_schema = db.customer;
const menu_schema = db.menu;
const order_schema = db.orders;



//create customer
 exports.CreateNewCustomer =(req,res)=>{
    const newCustomer = {
        name : req.body.name,
        contact : req.body.contact
    }

    customer_schema.create(newCustomer).then(data=>{
          res.send(data).status(200);
          console.log("customer created successfully");
    }).catch(err=>{
        res.send(err).status(400);
    })
 }

//create menu
 exports.CreateMenu = (req,res)=>{
     const newmenu = {
         name : req.body.name,
         serving : req.body.serving
     }

     menu_schema.create(newmenu).then(data=>{
         res.send(data).status(200);
         console.log("menu created successfully")
     }).catch(err=>{
         res.send(err).status(400);
     })
 }

 //delete customer
exports.deleteCustomer = (req,res)=>{

   const name = req.params.name;
    customer_schema.destroy({where:{"name" : name} }).then(data=>{
        console.log(data);
        res.send("customer deleted").status(200);
    }).catch(err=>{
        res.send(err).status(500);
    })
}


//delete menu
exports.deleteMenu = (req,res)=>{

    const name = req.params.name;
    menu_schema.destroy({where:{"name" :name}}).then(data=>{
        res.send("menu deleted").status(200);
    }).catch(err=>{
        res.send(err).status(400);
    })
}

exports.findAllCustomer = (req,res)=>{
    customer_schema.findAll().then(data=>{
        res.send(data).status(200);
    }).catch(err=>{
        res.send(err).status(400);
    })
}

exports.findAllMenu = (req,res)=>{
    menu_schema.findAll().then(data=>{
        res.send(data).status(200);
    }).catch(err=>{
        res.send(err).status(400);
    })
}

exports.createOrder = (req,res)=>{

    const order= {
         customer_id : req.body.customerId,
         menu_id  : req.body.menuID 
    }
    order_schema.create(order).then(data=>{
            res.status(200).send(data);
    }).catch(err=>{
        res.send(err);
    })
    
}
