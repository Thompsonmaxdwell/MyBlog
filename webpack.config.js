// configure webpack

const path =  require('path');

module.exports = {
    mode : 'development',
    entry : "./src/lib/index.js",

    output: {
        path: path.resolve(__dirname, 'bundler/js'),
        filename : "bundle.js"
    

    }
}