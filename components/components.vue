<template>
  <div id="example">
     <my-component></my-component>
     <hello></hello>
  </div>
</template>

<script>

    /**
    局部组件的使用方法
     */
    var child={
        template:"<div>hello world!</div>"
    };
    var hello = {
        template:"<div>hello world 1</div>"
    }
  export default{
     components:{
         "my-component":child,
         "hello":hello
     }
  }

</script>