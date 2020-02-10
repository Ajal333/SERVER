const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dhishna");

const Transactions = require("../models/transaction.model");
const Users = require("../models/user.model");

Users.find({}, function(err, users) {
    fs.writeFile("users.json", JSON.stringify(users, null, 4), function(err) {
        if (err)
        {
            console.log(err);
        }
        else {
            console.log("json file created");
        }

    });

});

Transactions.find({}, function(err, transactions) {
    fs.writeFile("transactions.json", JSON.stringify(transactions, null, 4),
    function(err) {
        if (err) console.log(err);

        else console.log("transactions file created");
    });
    
});