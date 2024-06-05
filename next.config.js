/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // Add a rule for JavaScript files using babel-loader
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: /node_modules\/@mui\/x-charts/, // Include only @mui/x-charts package
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'], // Use Next.js Babel presets
        },
      },
    });

    // Add file-loader configuration for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
