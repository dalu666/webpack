// 1.jq 传入window的原因  减少作用域链查找
// js的特性，作用域链
// 减少查找时间， js寻找变量的时候会一层一层往上查找
// // 2. if(typeof define ==='function'&& define.amd&& define.amd.jQuery){
//     define('jQuery',[],function(){return jQuery})
// }
// 出现的原因，是 js 引入的方式不同可能是 script amd cmd 主要是对模块化的支持

(function(window){


    function jquery(){
        return new jquery.fn.init()
    }
    // 利用js引用类型的特点 函数属于引用类型
    jquery.fn=jquery.prototype={
        
        init:function(){

        }
    }
    jquery.fn.init.prototype=jquery.fn;
    // jquery如何扩展方法
    jquery.fn.extend=jquery.extend=function(){
        // 享元模式
        let target =arguments[0] || {};
        let length=arguments.length;
        let options
        let i=1;
        if(typeof target !=='object'){
            target={}
        }
        if(length===1){
            target=this;
            i--
        }
        for(;i<length;i++){
            if((options=arguments[i])!=null){
                for(var name in options){
                    target[name]=options[name]
                }
            }
        }
        
    }
    jquery.fn.extend({
        // css模块
    })
    jquery.fn.extend({
        // 动画模块
    })
    if(typeof define ==='function'&& define.amd&& define.amd.jQuery){
        define('jQuery',[],function(){return jQuery})
    }
    window.jquery=window.$=jquery;
})(window)
