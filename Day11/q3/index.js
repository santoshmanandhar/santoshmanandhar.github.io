const express = require("express");
const app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname,'css')));

app.use(express.urlencoded({ 
    extended: false 
}));

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
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    res.send(`<h>${obj.fullName} is ${obj.age} years old.`);
});

app.listen(3000,()=>{
    console.log("The server is running...");
});