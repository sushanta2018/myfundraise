const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
