/**
 * Configs file for bundling
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

'use strict';

var pkg = require('./package.json');
var webpack = require('webpack');

var SafeUmdPlugin = require('safe-umd-webpack-plugin');

var isProduction = process.argv.indexOf('-p') >= 0;
var isCombined = process.argv.indexOf('--combine') >= 0;

var FILENAME = pkg.name + (isCombined ? '.comb' : '') + (isProduction ? '.min.js' : '.js');
var BANNER = [
    FILENAME,
    '@version ' + pkg.version,
    '@author ' + pkg.author,
    '@license ' + pkg.license
].join('\n');

module.exports = {
    eslint: {
        failOnError: isProduction
    },
    entry: './src/js/appLoader.js',
    output: {
        library: ['tui', 'AppLoader'],
        libraryTarget: 'umd',
        path: 'dist',
        publicPath: 'dist/',
        filename: FILENAME
    },
    externals: {
        'tui-code-snippet': {
            'commonjs': 'tui-code-snippet',
            'commonjs2': 'tui-code-snippet',
            'amd': 'tui-code-snippet',
            'root': ['tui', 'util']
        },
        'ua-parser-js': {
            'commonjs': 'ua-parser-js',
            'commonjs2': 'ua-parser-js',
            'amd': 'ua-parser-js',
            'root': 'UAParser'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(test|node_modules|bower_components)/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new SafeUmdPlugin(),
        new webpack.BannerPlugin(BANNER)
    ],
    devServer: {
        historyApiFallback: false,
        progress: true,
        host: '0.0.0.0',
        disableHostCheck: true
    }
};
