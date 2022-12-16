const express = require("express");
const app = express();

app.use(express.urlencoded({ 
    extended: false 
}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
   
});

app.post('/result',(req,res) =>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    res.send(`<h>${obj.fullName} is ${obj.age} years old.`);
});


app.listen(3000, () =>{
    console.log("The server is running....")
});