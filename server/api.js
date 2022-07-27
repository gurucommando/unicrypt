var mongoClient = require('mongodb').MongoClient;
var express = require("express");
var cors = require("cors");
var url = "mongodb://127.0.0.1:27017";
// var cron = require('node-cron');
var app = express();
var bodyParser = require('body-parser');
const { Router } = require('express');
const { ObjectId } = require("mongodb");
const { request } = require('express');

app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(bodyParser.json());

app.post("/addData", function(req, res){
    mongoClient.connect(url, function(err, clientObj){
        if(!err) {
            var db = clientObj.db("unicryptdb");
            // console.log(req.body)
            db.collection("unitoken").insertOne(req.body, function(err, result){
                 if(!err) {
                     console.log("Record Inserted");
                     res.send(result);
                 } else {
                     console.log('err.message');
                     res.send('err.message');
                 }
            });

       
        }
    })
})

app.get("/getData",function (req,res){
    mongoClient.connect(url,function(err,clientObj){
        if(!err){
            var database = clientObj.db("unicryptdb");
            
            database.collection("unitoken").find().toArray(function(err,documents){
                if(!err){
                   res.send(documents);
                   console.log('success')
                }
            })
        }
    })
    })

app.listen(9999);
console.log("Server Started: http://127.0.0.1:9999");