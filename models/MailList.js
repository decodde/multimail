let mongoose = require("mongoose");

let mailList = new mongoose.Schema({
    mailListId : {type : String, required : true},
    createdAt : {type : Date, required : true},
    modifiedAt : {type : Date, required : true}
})

mongoose.model("MailList") = mailList;