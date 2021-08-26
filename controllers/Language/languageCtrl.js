const { Schema } = require("mongoose");
const Language = require("../../models/Language");

// Get entire language for a website.
// Need to know which database to access and which language to send
exports.getLanguage = async function (req, res, next) {
  const db = req.user.currentDatabase || req.user.databases[0];
  const language = "en";

  try {
    const data = await Language[db]
      .find({ language: language }, { _id: false })
      .lean()
      .exec();
    res.send(data);
  } catch (err) {
    next(err);
  }
};
