import * as webpack from "webpack";
import * as path from 'path';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem",
  },
  optimization: {
    usedExports: true,
  },
};

export default config;
