const mongoose = require("mongoose");
//creating database
mongoose.connect("mongodb://localhost:27017/portfolioDB",{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("Connection successful");
}).catch((error)=>{
    console.log(error);
})