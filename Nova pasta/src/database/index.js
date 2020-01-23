const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://bruno:bruno1995@cluster0-k1asz.mongodb.net/test?retryWrites=true&w=majority', { useMongoClient: true});



mongoose.Promise = global.Promise;

module.exports = mongoose;

