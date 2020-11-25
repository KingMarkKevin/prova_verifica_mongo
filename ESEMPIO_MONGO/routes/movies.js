var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://kevin-king:0117kevin.@cluster0.zuvcs.mongodb.net/Cluster0?retryWrites=true&w=majority'

router.get('/', function(req, res, next) {
    const client = new MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(get10Movies);

    function get10Movies (err) {
        if (err) console.log("Connessione al db non riuscita");
        else{
            const collection = client.db("sample_mflix").collection("movies");
            collection.find().limit(10).toArray(callBackQuery); 
        }
    }

    function callBackQuery (err, result) {
        if (err) console.log(err);
        else res.send(result);
        client.close();
    }
});

module.exports = router;
