// 实现功能,打包后的所有jquery的 $.bind的调用方式 改为 $.on

module.exports= function(context){
    // console.log(context)
    // 输出的文件中的bind 替换成 on
    return context.replace('bind','on')
}