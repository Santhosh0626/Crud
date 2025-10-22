const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const Routes = require("./Routes/Userroutes")


mongoose.connect('mongodb://localhost:27017/usermanagement');
const db = mongoose.connection;
db.on('error',(err) =>{
    console.log(err)
})
db.once('open', ()=>{
    console.log("Database connected successfully")
})
const app = express();
app.use(bodyparser.json())
app.use(express.json());

const PORT = 3001
app.listen(PORT,()=>{
    console.log("PORT is running on 5000")
})

app.use("/",Routes)
