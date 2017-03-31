<template>
  <div id="parentpropstochild">
     <child message="this is parent props to child example!"></child>
      <camelcased my-message="this is camelCased example!"></camelcased>
      <dyanprops></dyanprops>
  </div>
</template>

<script>

   /**
    * 定义一个局部组件
    * */
   /**
    * 子组件要想使用父组件的数据，需要使用props选项
    * 子组件要显式的用props选项声明它期待获得的数据*/
    var child = {
       props:['message'],
       template:"<span>{{message}}</span>"
   }

   /**
    * *HTML 特性是不区分大小写的。所以，
    * 当使用的不是字符串模版，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名
    * */

   var camelcased = {
       props:['myMessage'],
       template:"<div>{{myMessage}}</div>"
   }


   /**
    * 在模板中，要动态地绑定父组件的数据到子模板的props，
    * 与绑定到任何普通的HTML特性相类似，就是用 v-bind。每当父组件的数据变化时，该变化也会传导给子组件*/

   var dynaProp ={
       props:['parentmsg'],
       template:"<div><input v-model='parentmsg'><br><child :my-message='parentmsg'>{{parentmsg}}</child></div>"
   }






    export default{
        components:{
            'child':child,
            'camelcased':camelcased,
            'dyanprops':dynaProp
        }
    }




</script>