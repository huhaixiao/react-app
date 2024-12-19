const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem",
  },
  optimization: {
    usedExports: true,
  },
};
