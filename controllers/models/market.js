const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  name: { type: String, required: true },
  manager: { type: String, required: true },
  scheduler: [{ type: String, required: true }],
  climbers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  teams: [{type: Schema.Types.ObjectId,ref:"teams"}],
  tickets: [{type: Schema.Types.ObjectId,ref:"tickets"}],
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;
