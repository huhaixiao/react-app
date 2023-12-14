import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import options from "./webpack.dev";

process.env.NODE_ENV = 'development'

const compiler = webpack(options);
const devServerOptions = options.devServer;
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log("Starting server...");
  await server.start();
};

runServer();
