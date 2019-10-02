const path = require("path");
const outputDir = "./dist";

module.exports = {
    entry: path.resolve('babel-polyfill', __dirname, "src", "index.jsx"),
    output: {
        path: path.join(__dirname, outputDir),
        filename: "main.js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
                }
            },
        ]
    },
};