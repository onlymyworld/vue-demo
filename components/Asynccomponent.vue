<template>

    <div id="example">
        <async_example></async_example>
    </div>
</template>

<script>

    /**
     * 异步组件
     * vue.js允许定义一个工厂函数，动态的解析组件的定义，
     * vue.js只在需要渲染时触发工厂函数，并且将结果缓存起来，方便下次再次渲染使用
     * */

    Vue.component("async_example", function (resolve,reject) {
        setTimeout(function(){
            resolve({
                template:"<div>I am async</div>"
            })
        })
    })




</script>