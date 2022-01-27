const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  smrtNumber: { type: String },
  siteID: { type: String },
  towerOwner: { type: String },
  contactNumber: { type: String },
  priority: { type: String },
  issue: { typye: String },
  rmaS: [{
    tms: { type: String, },
    confirmationNumber: { type: String, },
    authorizationNumber: { type: String, },
    rmaReturned: { type: Boolean },
    dateStaged: { type: Date },
  }],
  rmaReturned: { type: Boolean },
});
ticketSchema.statics.rmaClock = async function () {
            try {
               
                return 
            } 
            catch (error) {
                throw error;
            }
};
const Tickets = mongoose.model("Team", ticketSchema);

module.exports = Tickets;
