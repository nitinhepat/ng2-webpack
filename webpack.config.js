var webpack = require('webpack');
var htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {

    entry: './app/boot.ts',
    output: {
        path: './dist',
        filename:'app.bundle.js'
    },
    module: {
        loaders:[
            { loader: 'raw', test: /\.(css|html)$/ },
            {test: /\.ts$/,loaders:['ts-loader','angular2-template-loader']}
        ]
            
    },
    resolve:{
        extensions: ['','.js','.ts']
    },
    plugins:[
        new htmlWebpackplugin({
            template:'./index.html'
        })
    ]
}