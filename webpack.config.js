const path=require("path");
const myloader=require('./src/myloader.js')
const webpack=require('webpack')
const myplugin=require('./src/myplugin.js')
module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                       
                    },
                    {
                        loader:'./src/myloader.js'
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            test:{a:1}
        }),
        new webpack.DllReferencePlugin({
            manifest:'./dll/vendor-mainifest.json'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new myplugin()
    ]
}