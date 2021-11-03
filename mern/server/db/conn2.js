const mongoose = require("mongoose");
const dbkey = require("./keys").mongoURI;
var _db;

/* Mark's comments
This is the new connection class, using mongoose.connect instead.
In order to use it the same as last time (like in record.js), we do mongoose.connection.getClient(), which
will return a MongoClient like in conn.js.
 */
module.exports = {
    connectToDb: function() {
        mongoose.connect(
            dbkey,
            {useNewUrlParser: true}
        )
        _db = mongoose.connection.getClient();
    },

    getDb: function () {
        return _db;
    },
};

