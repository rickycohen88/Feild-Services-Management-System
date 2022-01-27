const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consumablesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  partNumber: { type: String, required: true },
  quantityOnHand: { type: Number, required: true },
  minQuantity: { type: Number, required: true },
  chatImn: { type, String },
  chatSap: { type, String },
  greybarNumber: { type, String },
});

const Consumable = mongoose.model("Consumable", consumablesSchema);

module.exports = Consumable;
