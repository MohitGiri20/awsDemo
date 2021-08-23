const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.post("/",(req,res)=>{
     
    var username  = req.body.username
    var email  = req.body.email
    var result = username + " " + email;
    res.send("Got your entered data " + result)
})




app.listen(3000,()=>{
    console.log("Server started")
})