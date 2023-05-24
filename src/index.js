var express=require('express')
var mongoose=require('mongoose')
var hbs=require('hbs')
var path=require('path')
var app=express()
var collection=require('./mongoose')
var templatepath=path.join(__dirname,'../views')

app.set("view engine",'hbs')
app.set("views",templatepath)
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render("login")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post('/signup',(req,res)=>{
    var data=
    {
        name:req.body.name,
        password:req.body.password
    }

    collection.insertMany([data])
    res.render("home")

})




app.post('/login',async (req,res)=>{
   
    var check=await collection.findOne({name:req.body.name})
    console.log(req.body.password)
    console.log(check.password)
    if(check.password===req.body.password)
    {
        res.render('home')
    }
    else
    {
        res.send("wrong details found")
    }

})

app.listen(2000,()=>{
    console.log("server running on 2000 port")
})























































