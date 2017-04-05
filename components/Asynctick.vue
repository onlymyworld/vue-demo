<template>
  <div id="example">
    {{message}}
      <child></child>
  </div>
</template>

<script>

   /**
    * 异步更新队列
    * */
    var vm = new Vue({
       el:"#example",
       data:{
           message:"123"
       }
   })
    vm.message = "new value";
    vm.$el.textContent === "new value" // false
   /**
    * DOM更新后执行的方法*/
    Vue.nextTick(function(){
        vm.$el.textContent === "new value" //true

    })

    /**
     * 在组件内部使用nextTick方法非常方便;
     * 因为它不需要全局 Vue ，并且回调函数中的 this 将自动绑定到当前的 Vue 实例上
     * */
    Vue.component("child",{
        template:"<span>{{message}}</span>",
        data:function(){
            return{
                message:"not update"
            }
        },
        methods:{
            updateMessage:function(){
                this.message = "update";
                console.log(this.$el.message ) //not update
                this.$nextTick(function () {
                    consol.log(this.$el.message ) //update
                })
            }
        }
    })

</script>