const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');



const config = {
    //inform webpack that we're building a bundle for nodeJs, rather than for the browser
    target: 'node', // in order to ignore built-in modules like path, fs, etc.


    //Tell webpack the root file of our server application
    entry: './src/index.js',

    //Tell webpack where  to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};

module.exports = merge(baseConfig, config);