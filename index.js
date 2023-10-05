const express = require("express")
const app = express()
PORT = 5100
const ejs = require("ejs")

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
   res.render("index")
   console.log("index")
})

app.get("/signup", (req, res)=>{
   res.render("signup");
   console.log("signup");
})

app.get("/signin", (req, res)=>{
   res.render("signin");
   console.log("signin");
})

app.listen(PORT, () => {
   console.log("server is runnin on port 5100");
})