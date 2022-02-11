//import module
const express = require('express')
let mongodb = require('mongodb')
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create rest api
router.post("/",(req,res)=>
{
    let p_id = req.body.p_id
   
    let obj = {
        "p_id" : p_id,
        
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
        {
            console.log("Error:-",err)
        }
        else
        {
            let db = conn.db("nodedb")
            db.collection("product").deleteOne(obj,(err)=>
            {
                if(err)
                {
                    res.json({'delete':'failed'})
                }
                else{
                    console.log("Data Deleted")
                    res.json({'delete':'success'})
                }
            })
        }
    })

})

//export router
module.exports = router
