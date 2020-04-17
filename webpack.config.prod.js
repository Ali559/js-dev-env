import path from 'path';

import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpackMd5Hash from 'webpack-md5-hash';
import extractTextPlugin from 'extract-text-webpack-plugin'
export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [

        new extractTextPlugin('[name].[contenthash].css'),
        new webpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new htmlWebpackPlugin({
            template: 'src/index.html',

            inject: true,
            trackJsToken: 'e95a3faa452543dd921275c1995bb9f4'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loader: extractTextPlugin.extract('css?sourceMap') }
        ]
    }
}