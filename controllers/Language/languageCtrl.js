const Language = require("../../models/Language");

// Get entire language for a website.
// Need to know which database to access and which language to send
exports.getLanguage = async function (req, res, next) {
  const language = "en";

  try {
    const data = await Language.findOne({ language }, { _id: false })
      .lean()
      .exec();
    console.log(data);
    res.send(data);
  } catch (err) {
    next(err);
  }
};
