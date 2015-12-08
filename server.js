var express = require("express"),
        mongo = require("mongodb"),
        bodyParser = require("body-parser"),
        MongoClient = mongo.MongoClient,
        app = express(),
        bsonpure = mongo.BSONPure = require('bson').BSONPure,
        dbUrl = "mongodb://localhost:27017/feeds";

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

//Pobranie listy feedów
app.get("/feeds", function(req, res) {
    var limit = req.query.limit;
    MongoClient.connect(dbUrl, function(err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});
            return;
        }
        db.collection("feeds").find({}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs);
            
            db.close();
        });
    });
});

//pobieranie wybranego feeda
app.get("/feed/:id", function(req, res) {
    var id = req.params.id,
            isValid = bsonpure.ObjectID.isValid(id);

    if (!isValid) {
        res.status(500);
        res.json({error: true});
        return;
    }
    MongoClient.connect(dbUrl, function(err, db) {

        if (err) {
            res.status(500);
            res.json({error: true});
            return;
        }

        db.collection("feeds").find({_id: new mongo.ObjectID(id)}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs[0]);
            
            db.close();
        });
    });
});

//dodawanie nowego feeda
app.post("/feeds", function(req, res){
    MongoClient.connect(dbUrl, function(err, db) {

        if(err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("feeds").insert(req.body, function(err, doc) {

            if(err) {
                res.status(500);
                res.json({error: true});

                return;
            }

            res.json(doc[0]);

            db.close();

        });

    });
        
});

//usuwanie feeda
app.delete("/feed/:id", function(req, res) {
    var id = req.params.id,
            isValid = bsonpure.ObjectID.isValid(id);

    if (!isValid) {
        res.status(500);
        res.json({error: true});
        return;
    }
    MongoClient.connect(dbUrl, function(err, db) {

        if (err) {
            res.status(500);
            res.json({error: true});
            return;
        }

        db.collection("feeds").findAndRemove({_id: new mongo.ObjectID(id)},function(err, doc) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json({deleted: true});
   
            db.close();
        });
    });
});

app.listen("8000", function() {
    console.log("Serwer aktywny");
});


