const languageCtrl = require("./languageCtrl");

module.exports = function (app) {
  // Gets all translations from a specific language
  app.get("/get_language", languageCtrl.getLanguage);
};
