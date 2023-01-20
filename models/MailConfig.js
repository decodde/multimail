let mongoose = require("mongoose");

let mailConfig = new mongoose.Schema({
    senderAddress : {type : String, required : true},
    mailConfigId : {type : String, required : true},
    createdAt : {type : Date, required : true},
    modifiedAt : {type : Date, required : true}
})

mongoose.model("MailConfig") = mailConfig;