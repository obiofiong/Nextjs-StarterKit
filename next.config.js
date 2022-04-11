/** @type {import('next').NextConfig} */
const withStyledIcons = require("next-plugin-styled-icons");

module.exports = {
  reactStrictMode: true,
  withStyledIcons: withStyledIcons(),
};
