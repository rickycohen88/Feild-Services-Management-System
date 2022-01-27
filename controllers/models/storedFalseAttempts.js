const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SFAschema = new Schema({
    event:{type:{}, required:true},
    date:{type:Date,required:true},
});

const SFA = mongoose.model("Sfa", SFAschema);

module.exports = SFA;
