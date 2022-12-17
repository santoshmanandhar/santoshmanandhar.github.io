const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.get('/', (req,res) => {
    res.render(path.join(__dirname,"view", "index.ejs"))
   
});

app.post('/result',(req,res) =>{
    let fullName = req.body.fullName;
    let age = req.body.age;
    if(!fullName){
        fullName = "person"
    }
    if(!age){
        age = -1;
    }
    res.send(`<h>Welcome ${fullName}. You are ${age} years old.`);
});


app.listen(3000, () =>{
    console.log("The server is running....")
});