const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

let AdminSchema = new Schema(
    {
        username : {type: String, require: true, max: 100},
        password : {type: String, require: true}
    }
);

AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", AdminSchema);