var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { "movie_name": "dragon city" };
    db.movies.find({ year: 2014 }).toArray(function(err, result) {
        if (err) throw err;
        console.log("retrived")
        console.log(JSON.stringify(result));
        db.close();
    });
});