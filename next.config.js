const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
    // This will prefix the locale in the URL, e.g., /en for English.
  },
  domains: [
    {
      domain: "example.com",
      defaultLocale: "en",
    },
    {
      domain: "example.vn",
      defaultLocale: "vi",
    },
  ],
};

module.exports = nextConfig;
