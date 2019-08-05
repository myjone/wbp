const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    entry: {
        loadsh:'./src/loadsh.js',
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(jpg|png|gif)$/,
                use:
                {
                    loader: 'url-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: 'images/',
                        limit: 2018,
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    "sass-loader",
                    'postcss-loader',
                ]
            }, {
                test: /\.(eot|ttf|svg|woff)$/,
                use:
                {
                    loader: 'file-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        // publicPath:'http/cdn.com/',
        filename: '[name].js',
        path: path.resolve(__dirname,'../dist')
    },

}