const webpack =require('webpack')
module.exports={
    entry:{
        vendor:['jquery','lodash']
    },
    output:{
        path:__dirname+'/dll',
        filename:'[name].dll.js',
        library:'[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            path:__dirname+'/dll/[name]-mainifest.json',
            name:'[name]_library'
        })
    ]
}