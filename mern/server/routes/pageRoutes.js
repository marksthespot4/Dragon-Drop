const express = require("express");
const router = express.Router();

const dbo = require("../db/conn2");
const dbString = "myFirstDatabase";

/* Mark's comments
If you want to make more page routes, this is the place.
Special note, you'll have to follow my formatting. All the commands should
be the same as when you made them in record.js, but you need to manipulate the
db to be db(dbString).
See lines 19 and 20? That's what you need to do before using it like before.
 */
const ObjectId = require("mongodb").ObjectId;
// shoul equal the return of mongo.connection.getClient(), since thats what we use in record.js

router.route("/add").post(function (req, response) {
    //console.log(myDb);
    const dbConnect = dbo.getDb();
    const myDb = dbConnect.db(dbString);
    let myobj = {
        user: req.body.user,
        pagename: req.body.pagename,
        pagedata: req.body.pagedata,
        pub: req.body.pub,
        pagepreview: req.body.pagepreview,
    };
    //console.log(db_connect);
    myDb.collection("pages").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});
// This section will help you delete a record specifically.
router.route("/delete/:id").delete((req, response) => {
    const dbConnect = dbo.getDb();
    const myDb = dbConnect.db(dbString);
    let myquery = { _id: ObjectId( req.params.id )};
    myDb.collection("pages").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 page deleted");
        response.status(obj);
    });
});
router.route("/get/:id").get(function (req, res) {
    const dbConnect = dbo.getDb();
    const myDb = dbConnect.db(dbString);
    let myquery = { _id: ObjectId( req.params.id )};
    myDb
        .collection("pages")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

router.route("/update/:id").post(function (req, response) {
    const dbConnect = dbo.getDb();
    const myDb = dbConnect.db(dbString);
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = {
        $set: {
            user: req.body.user,
            pagename: req.body.pagename,
            pagedata: req.body.pagedata,
            pub: req.body.pub,
            pagepreview: req.body.pagepreview,
        },
    };
    myDb
        .collection("pages")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});
//list of all pages
router.route("/all").get(function(req,res) {
    let dbConnect = dbo.getDb();
    const myDb = dbConnect.db(dbString);
    myDb
        .collection("pages")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
});
module.exports = router;