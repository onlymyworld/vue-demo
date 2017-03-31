<template>
    <div id="data_must_fun">
        <my-counter></my-counter>
        <my-counter></my-counter>
        <my-counter></my-counter>
        <newmycounter></newmycounter>
        <newmycounter></newmycounter>
        <newmycounter></newmycounter>
    </div>
</template>

<script>


 /**
  * data 必须是函数，
  *  Data must a function
  * */

 var data = {counter:1,newcounter:0};

 /**
  * 自定义一个局部组件*/
 var mycounter = {
     template:"<button v-on:click='counter +=1'>{{counter}}</button>",
        data:function(){
            return data;
        }
 };

 /**
  * 由于这三个组件共享了同一个 data;因此增加一个 counter 会影响所有组件！这不对。
  我们可以通过为每个组件返回全新的 data 对象来解决这个问题*/
 var mynewcounter ={
        template:"<button v-on:click='newcounter +=1'>{{ newcounter }}</button>",
        data: function () {
            return {
                /**
                 * 这样每个newcounter都有他自己内部的状态，不会互相干扰*/
                newcounter:0
            }
        }
 }

 export default{
        components:{
            "my-counter":mycounter,
            "newmycounter":mynewcounter
        }
    }


</script>