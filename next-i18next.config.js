const path = require("path");

// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
  },
  localePath: path.resolve("./public/locales"),
};
