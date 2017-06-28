var webpack = require('webpack');

module.exports =
{
    entry:['./client/client.js'],
    output:    {
        path:'./dist',
        filename:'bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            query:{
               presets:['react','es2015'] 
            }
        }]
    }
};