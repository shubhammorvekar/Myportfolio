const express = require("express");
require("./db/dbcon");
const User = require("./models/user.js");
const path= require("path");
const app = express();
const PORT=process.env.PORT||3000;
// static express
const staticpath=path.join(__dirname + "/../public")
//middleware
app.use("/css",express.static(path.join(__dirname + "/../node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path.join(__dirname + "/../node_modules/bootstrap/dist/js")))
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
// set view enjine to ejs
app.set("view engine","ejs");
//routing 
app.get("/",(req,res)=>{
    res.render("home" ,{succes:""});
})

app.post("/",async(req,res)=>{
    try{
        // res.send(req.body);
        // console.log(req.body.uname);
        const userData = new User(req.body);
        await userData.save();
        res.render("home",{succes:"Thank you ! received successfully"}) 
    }catch(error){
        res.status(500).send(error);
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
