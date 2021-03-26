// 实现功能,将 asset静态文件目录替换为  www.baidu.com
const fs=require('fs')
const path=require('path')

function a(){
}

a.prototype.apply=function(complier){
    complier.hooks.done.tap('changeStatic',function(compliation){
        // 获取当前文件的绝对路径
        var context=complier.options.context
        let publicPath=path.resolve(context,'dist')
        // 获取dist文件夹下的 文件信息
        compliation.toJson().assets.forEach(ast => {
            const filepath=path.resolve(publicPath,ast.name)
            fs.readFile(filepath,function(err,file){
                // 文件类型buffer转为字符串
                let newContext =file.toString().replace('./asset','www.baidu.com')
                fs.writeFile(filepath,newContext,function(){})
            })
        });
    })

    // apply 对打包的某个周期进行监听
    // 生命周期
    // done 打包完成并输出到dist目录
    // emit 刚刚打包完成，准备输出
    // begin
}

module.exports=a;