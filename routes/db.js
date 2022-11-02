const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://AarjavD08:AarjavD08@cluster0.y9tfxwv.mongodb.net/?retryWrites=true&w=majority")

var schema = mongoose.Schema({
    task:String
});

module.exports = mongoose.model("tasker", schema);