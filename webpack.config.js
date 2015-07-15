/*
 * react-tinyscrollbar
 *
 * https://github.com/jostw/react-tinyscrollbar
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

var path = require("path");
var webpack = require("webpack");

var isDev = process.argv[1].match("webpack-dev-server");

module.exports = {
    entry: (function() {
        var entry = {};

        if (isDev) {
            entry.example = [
                "webpack/hot/dev-server",
                path.resolve(__dirname, "example/js/example.jsx")
            ];
        } else {
            entry.ReactTinyscrollbar = path.resolve(__dirname, "src/ReactTinyscrollbar.jsx");
            entry.vendor = ["react", "jquery"];
        }

        return entry;
    })(),

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },

    plugins: (function() {
        var plugins = [];

        if (!isDev) {
            plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"));
        }

        return plugins;
    })(),

    devServer: {
        contentBase: "example/"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    }
};
