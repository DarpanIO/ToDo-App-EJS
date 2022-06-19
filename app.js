const express=require("express");
const bodyParser=require("body-parser");
const app=express();

var items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',function(req,res){
var today =new Date();
var currentDay=today.getDay();
var day="";
if(currentDay==6||currentDay==0){
    day="Weekend";
}
else{
    day="Weekday";
}
// res.send(day);
res.render('list',{kindOfDay:day,newItem:items});
});

app.post('/',function(req,res){
    item=req.body.newItem;
    items.push(item);
    res.redirect('/');
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
})