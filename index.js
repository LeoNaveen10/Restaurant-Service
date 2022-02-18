const db = require("./model/db");

const express = require("express");

const app = express();

const body_parser = require("body-parser");
app.use(body_parser.json());

require("./Router/rest.route")(app);

db.sequelize.sync({force : false}).then(()=>{
    console.log("tables got created");
}).catch(err=>{
    console.log(err);
})

app.listen(8090,()=>{
    console.log("listening at 8090");
});