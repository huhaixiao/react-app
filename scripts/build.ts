import webpack from "webpack";
import options from "./webpack.prod";

process.env.NODE_ENV = "production";

const compiler = webpack(options);
compiler.run((err, result) => {
  console.log({ err, result });
});
