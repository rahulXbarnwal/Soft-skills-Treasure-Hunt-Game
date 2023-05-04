const mongoose = require("mongoose");

const QuesSchema = new mongoose.Schema({
  text: { type: String, required: true },
  img: { type: String },
  answers: {
    type: [String],
    required: true,
  },
  hints: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Question", QuesSchema);
