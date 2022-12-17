const express = require("express");
const path = require("path");
const productRouter = require("./route/product");
const app = express();

const products = [
    {name:"Basketball", price:120, desc:"Professional Basketball", id:1 },
    {name:"Football", price:20, desc:"Football for kids", id:2 },
    {name:"Chess", price:50, desc:"Magnetic board", id:3 },
    {name:"Badminton", price:70, desc:"Pro level grip and net", id:4 },
];

let cart = [
    {
        cartId:1,
        name:"Basketball",
        price:120,
        desc:"Professional Basketball",
        id:1,
        quantity:1
    },
    {
        cartId:2,
        ame:"Chess",
        price:50,
        desc:"Magnetic board",
        id:3,
        quantity:2
    }
];

app.set("view engine","ejs");
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.use("/css", express.static(path.join(__dirname,"css")));
app.use("product", productRouter);

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "view", "main.ejs"), {products, cart});

});

app.get("/addcart",(req, res) => {
    let id=parseInt(req.query.id);
    let product = products.filter(p => p.id == id);
    if(product) {
        let cartId = cart.length > 0 ? cart[cart.length-1].cartId + 1 : 1;
        cart.push({cartId, ...product[0]});
    }
    res.redirect("/");
});

app.get("/removecart", (req,res) => {
    let cartId = parseInt(req.query.cartId);
    cart = cart.filter(c => c.cartId != cartId);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("The server is running....");
});