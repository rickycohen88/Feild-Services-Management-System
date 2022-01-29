const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SFA = require("./storedFalseAttempts");
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  role: {type: String, required: false },
  password: { type: String, required: true },
  market: { type: Schema.Types.ObjectId, ref: "Market" },
  address: {
    street: { type: String, required: true },
    street2: { type: String, required: false },
    city: { type: String, required: true },
    state:{type:String,required: true},
    zip: { type: String, required: true },
  },
  phone: { type: String, required: true },
  pto: [{ type: Date }],
  consumables: [{ type: Schema.Types.ObjectId, ref: "Consumables" }],
});

userSchema.statics.comparePassword = async function (enteredPassword,enteredEmail) {
  try {
    const res = await User.findOne({ email: enteredEmail });
    let compareAccount = bcrypt.compare(enteredPassword,res.password,function (err, result) {
        if (result == true) {
          return result;
        } else {
          
          return err;
        }
      }
    );
    return compareAccount;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
