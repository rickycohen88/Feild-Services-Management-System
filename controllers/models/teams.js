const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  members:[{type:Schema.Types.ObjectId,ref:"user"}],
  materials:{},
  tickets:[{type:Schema.Types.ObjectId,ref:"tickets"}],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
