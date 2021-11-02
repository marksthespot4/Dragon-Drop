const mongoose = require("mongoose");
const dbkey = require("./keys").mongoURI;
var _db;

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

