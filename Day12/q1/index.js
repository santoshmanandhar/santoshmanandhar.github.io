const express= require("express");
const path = require("path");
const app = express();

app.set('view engine','ejs')
app.set('views', path.join(__dirname,"view"));

app.use("/css",express.static(path.join(__dirname,"css")));

app.get("/", (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const theme = hour >=6 && hour <18 ? "/css/day.css" : "/css/night.css";
    res.render("index", {
        time: date.toTimeString(),
        theme:theme
    });
});

app.listen(3000, ()=>{
    console.log("The server is running....");
})