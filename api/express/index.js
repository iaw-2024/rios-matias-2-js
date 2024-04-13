const express = require("express");
const app = express();
const books = require("../data/books");

app.use(express.static('public'))
app.get("/books", (req, res)=>{
    res.status(200).send({
        books
    })
})
app.get("/dom",(req, res)=>{
    res.redirect("/public/dom/index.hmtl")
})
app.get("/express", (req, res) => res.status(200).send({
    books
}));
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;