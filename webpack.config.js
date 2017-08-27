const path = require('path');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

var config = {
		entry: SRC_DIR + "/app/index.js",
		output: {
			path: DIST_DIR + "/app",
			filename: "bundle.js",
			publicPath: "/app"
		},
		devServer: {
			inline: true,
			port: 3000
		},
		module: {
			loaders: [
				{
					test: /\.js?/,
					include: SRC_DIR,
					loader: "babel-loader",
					query: {
						presets: ["react", "es2015"]
					}
				}
			]
		}
};

module.exports = config;
