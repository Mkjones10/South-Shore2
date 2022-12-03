const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
app.use(morgan('dev'))
const path = require("path")
require('dotenv').config()

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/recipe', ()=> console.log('connected to database'))

app.use('/comment', require('./routes/commentRouter'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use((err,req,res,next)=>{
    console.log(err)
    if(err.name ==='UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({message:err.message})
})

app.listen(8000, ()=>{
    console.log('hello ')
})