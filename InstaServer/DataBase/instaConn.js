const express = require("express")
const mongoose = require("mongoose")
// const MongoClient = require('mongodb').MongoClient;

// DATABASE Connection
const DB = 'mongodb+srv://raju23031997:Chhnit1997@cluster0.bcey1mp.mongodb.net/InstaProject?retryWrites=true&w=majority'

// mongoose.connect("mongodb://localhost:27017/InstaServer")
mongoose.connect(DB)
.then(()=>{
    console.log("Insta Server Connetion Done.....")
})
.catch((error)=>{
    console.log(error)
})
