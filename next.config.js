const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  env: {
    // API_URL: "http://localhost:3000",
    API_URL: "https://my-musicc.vercel.app",
    BASE_URL: "https://my-music-docs.vercel.app",
    SITE_URL: "my-music-docs.vercel.app",
  }
};

module.exports = withNextra(nextConfig)