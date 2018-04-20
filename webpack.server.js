const path = require('path');
const nodeExternals = require('webpack-node-externals');



module.exports = {
    //inform webpack that we're building a bundle for nodeJs, rather than for the browser
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

    //Tell webpack the root file of our server application
    entry: './src/index.js',

    //Tell webpack where  to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //tell webpack to run babel on every file it runs through
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        "stage-0",
                        ['env',
                            //{"modules": false },
                            // { targets: { browsers: ['last 2 versions']}}
                        ]
                    ]
                }
            }
        ]
    }
};