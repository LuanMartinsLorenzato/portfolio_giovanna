/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localeDetection: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig;
