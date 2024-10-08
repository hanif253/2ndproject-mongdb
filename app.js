const express=require("express");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");
 const app=express();
 const userSchema = new mongoose.Schema({
    name:String,
    rollNo:Number
 });
  const User = new mongoose.model("User",userSchema);
  app.get("/find-data-form-database",(req,res)=>{
    User.find({name:"hanif"},{name:"1"}).then(result=>{
        console.log(result);
        res.send(result)
    }).catch(err =>{
        console.log(err);
    })
  }) ;
   const obj = new User(
    {
        name:"muzamil",
        rollNo:6
    }
   )
   User.updateOne({name:"hanif"},{$set:{rollNo:67}}).then(result =>{
    console.log(result);


   }).catch(err =>{
    console.log(err);
   });
   app.listen(3000,function(req,res){
    console.log("server running");
   });
