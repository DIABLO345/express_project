const express=require("express")
const app=express();
const path=require("path");
const hbs=require("hbs");
const partialPath=path.join(__dirname,"/partials");
app.use(express.static(__dirname+'/public/js'));
console.log(partialPath);
hbs.registerPartials(partialPath);

const date=new Date();
var day=date.getDay();
var cur_date=date.getDate();
var month=date.getMonth();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/images'));

app.use(express.static(__dirname+'/icon'));

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render('home.hbs');
});

app.get("/about",(req,res)=>{
  res.render("about.hbs");
    

});

app.get("/weather",(req,res)=>{
  res.render("weather.hbs");

});

app.get("*",(req,res)=>{
    res.send("404 error page");
});

app.listen(3000,()=>{
    console.log("port listen up");
    
});