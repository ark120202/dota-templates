const path = require("path");
const { PanoramaManifestPlugin, PanoramaTargetPlugin } = require("webpack-panorama");

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "layout/custom_game"),
        publicPath: "file://{resources}/layout/custom_game/",
    },

    resolve: {
        symlinks: false,
    },

    module: {
        rules: [
            { test: /\.xml$/, loader: "webpack-panorama/lib/layout-loader" },
            { test: /\.js$/, issuer: /\.xml$/, loader: "webpack-panorama/lib/entry-loader" },
            {
                test: /\.css$/,
                issuer: /\.xml$/,
                loader: "file-loader",
                options: { name: "[path][name].css", esModule: false },
            },
        ],
    },

    plugins: [
        new PanoramaTargetPlugin(),
        new PanoramaManifestPlugin({
            entries: [
                { import: "./loading-screen/layout.xml", filename: "custom_loading_screen.xml" },
                { import: "./hud/layout.xml", type: "Hud" },
            ],
        }),
    ],
};
