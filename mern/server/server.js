const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const pageRoutes = require("./routes/pageRoutes");
const app = express();
const cors = require("cors");
//require("dotenv").config({ path: "./config.env" });
//const port = process.env.PORT || 5000;
app.use(cors());
//app.use(express.json());
//app.use(require("./routes/record"));
// get driver connection
//https://stackoverflow.com/questions/52166434/how-to-get-mongoclient-object-from-mongoose
//use dis to figure out how to get mongoclient (page) to our mongoose connection (user).

//const dbo = require("./db/conn");
const db = require("./db/keys").mongoURI;
app.use(
    bodyParser.urlencoded ({
      extended: false
    })
);
app.use(bodyParser.json());
mongoose.connect(
    db,
    {useNewUrlParser: true}

).then(()=> console.log("MongoDB successfully connected"))
    .catch(err=>console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/routes/users", users);
app.use("/routes/pages", pageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log('Server running on port ${port}!'));
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//
//   });
//   console.log(`Server is running on port: ${port}`);
// });