var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DateSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Date = mongoose.model("Date", DateSchema);

module.exports = Date;
