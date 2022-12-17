const express = require("express");
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use('/css', express.static(path.join(__dirname,'css')));

const date = new Date();
const hour = date.getHours();

app.get("/", function(req, res) {
   if(hour >=6 && hour<=18){
        res.sendFile(path.join(__dirname,"./index-day.html"));
   }
   else{
        res.sendFile(path.join(__dirname,"./index-night.html"));
   }
});

app.post("/result", (req, res) => {
    let fullName = req.body.fullName;
    let age = req.body.age;
    res.redirect('/output?fullName='+fullName+'&age='+age);
});

app.get('/output', (req,res) => {
    let fullName = req.query.fullName;
    let age = req.query.age;
    res.send(`Welcom ${fullName} with the age of ${age}`);
});

app.listen(3000,()=>{
    console.log("The server is running...");
});