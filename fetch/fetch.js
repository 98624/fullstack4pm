//import express module
const express = require('express')
//import mongodb
let mongodb=require('mongodb')
const MongoClient = require('mongodb/lib/mongo_client')
//create mongo client
let mcl = mongodb.MongoClient
//create router inastance
var router = express.Router()
//import url
let url = require("../url")
//create rest api
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err)  
        {
            console.log("Error in connection:",err)
        }
    else
    {
        let db = conn.db("nodedb")
        db.collection("product").find().toArray((err,array)=>{
        if(err)
        {
            console.log("Error:",err)
        }
        else{
            console.log("Data Sent")
            res.send(array)
        }
    })
    }
    })
})
//export router
module.exports = router