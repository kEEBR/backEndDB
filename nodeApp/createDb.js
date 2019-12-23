var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

MongoClient.connect('mongobd://127.0.0.1:27017/NODEAPP',function(err,db){
    if(err) throw err;

    var collection = db.collection('test_insert');
    
        collection.count(function(err,count){
            console.log(format("count = %s", count));
        });

        collection.find().toArray(function(err,results){
            console.dir(results);
            db.close();
        });
    });
