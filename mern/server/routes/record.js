const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you delete a record specifically.
recordRoutes.route("/delete/pages/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("pages").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 page deleted");
    response.status(obj);
  });
});

//list of all pages
recordRoutes.route("/record/pages").get(function(req,res) {
  let db_connect = dbo.getDb();
  db_connect
      .collection("pages")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you get a list of all the records.

// This section will help you get a list of all the users.
recordRoutes.route("/record/users").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/users/id/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record/users/email/:email").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {email: req.params.email};
  console.log("query: "+myquery);
  db_connect.collection("users")
  .findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/record/pages/:id").get(function (req, res) {
  console.log("pageSearch");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
    .collection("pages")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// recordRoutes.route("/record/pages/userSearch").get(function(req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { user: "mark"};
//   db_connect
//       .collection("pages")
//       .find(myquery)
//       .toArray(function (err, result) {
//         if (err) throw err;
//         res.json(result);
//       });
// });

// recordRoutes.route("/record/pages/userSearch").get(function (req, res) {
//   console.log("correct record");
//   let db_connect = dbo.getDb();
//   let myquery = { user: "sarah" };
//   db_connect
//     .collection("pages")
//     .find(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// This section will help you create a new record.
recordRoutes.route("/record/users/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    email: req.body.email,
    password: req.body.password,
    pagecount: req.body.pagecount,
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/record/pages/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    user: req.body.user,
    pagename: req.body.pagename,
    pagedata: req.body.pagedata,
    pub: req.body.pub,
    pagepreview: req.body.pagepreview,
  };
  db_connect.collection("pages").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/users/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      email: req.body.email,
      password: req.body.password,
      pagecount: req.body.pagecount,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

recordRoutes.route("/update/pages/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      user: req.body.user,
      pagename: req.body.pagename,
      pagedata: req.body.pagedata,
      pub: req.body.pub,
    },
  };
  db_connect
    .collection("pages")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/delete/users/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = recordRoutes;