const mongoose = require("mongoose");
const cons = require("../config/mongoHandler").cons;

const languageSchema = new mongoose.Schema(
  {
    language: { type: String, unique: true },
  },
  { collection: "languages", strict: false }
);

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
