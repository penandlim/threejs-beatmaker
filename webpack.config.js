const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/ts/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },// Enable sourcemaps for debugging webpack's output.
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: 'src/', //disk location
        watchContentBase: true
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
            {
                test:  /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // {
            //     test: /\.js$/,
            //     use: ["source-map-loader"],
            //     enforce: "pre"
            // },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } // translates CSS into CommonJS modules
                },  {
                    loader: 'sass-loader', options: { sourceMap: true } // compiles Sass to CSS
                }]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', ".jsx" ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        // new HTMLInlineCSSWebpackPlugin(),
        // new DynamicCdnWebpackPlugin(),
        new CopyPlugin([
            { from: 'src/error.html', to: 'error.html' },
            { from: 'src/css', to: 'css' },
            { from: 'src/favicons', to: 'favicons' },
            { from: 'src/models', to: 'models' },
            { from : 'src/img', to : 'img'}
        ])
    ],
    mode: 'production',
};