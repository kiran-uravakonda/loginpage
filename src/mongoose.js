var mongoose=require('mongoose');
var url='mongodb://localhost:27017/Login'
mongoose.connect(url)
.then((result)=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log("database not connected")
})

var mongoSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
var collection=mongoose.model('user',mongoSchema)
module.exports=collection