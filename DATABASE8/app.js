const express =require("express");
const mongoose=require("mongoose");

const app=express();
mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema =new mongoose.Schema({
    name:String,
    rollNo:Number
});

const User = new mongoose.model("User",userSchema);

app.get("/find-data-from-database",(req,res)=>{
   User.find({name:"hanif"},{name:1}).then(result=>{
    console.log(result);
    res.send(result)
   }).catch(err =>{
    console.log(err);
   })
});
 const obj = new User(
    {
        name:"hanif",
        rollNo:34
    },
{
    name:"muzamil",
    rollNo:"24"
}
    
 )
 
User .updateOne({name:"hanif"},{$set:{rollNo:156}}).then(result=>{
    console.log(result);
    
}).catch(err =>{
    console.log(err);
    
})
app.listen(3000,function(req,res){
    console.log("server runing");
    
});

    



