<template>
    <div id="transition">
        <button @click="show = !show">
            toggle
        </button>
        <transition name="fade">
            <p v-show="show">
                切换内容
            </p>
        </transition>


        <!--多组件过渡-->
        <input type="radio" v-model="view" name="view" value="v-a" checked>A
        <input type="radio" v-model="view" name="view" value="v-b">B
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
        </transition>



        <!--列表的过渡-->
        <button @click="Add">Add</button>
        <button @click="Remove">Remove</button>
        <button @click="Shuffle">Shuffle</button>
        <transition-group name="list" tag="p">
            <span v-for="item in items" :key="item" class="list-item">
                {{item}}
            </span>
        </transition-group>
    </div>

</template>

<script>

    /**
     *1; vue 提供了transition的封装组件，在下列情况下，可以给任何元素和组件添加
     * entering 和 leaving 的过渡效果
     * 1,条件渲染（使用v-if）
     * 2,条件展示（使用v-show）
     * 3,动态组件
     * 4,组件根节点
    * */

    /**
     *2;多组件过渡，我们不需要type特性，只需要动态组件
     *  */

    /**
     * 3;列表过渡 列表过渡使用transition-group
     * 该组件有两个特性：
     * 1)	不同于transition,他会以一个真实的元素呈现，默认是<span>,也可以通过tag特性更换为其他元素
     * 2)	内部元素总是需要提供唯一的key属性值
     * */

    export default{
        data(){
            return {show:true,view:'v-a',nextNum:10,items:[1,2,3,4,5,6,7,8,9]}
        },
        /**
         * 定义多个组件；*/
        components:{
            'v-a':{
                template:"<div>this is a component</div>"
            },
            'v-b':{
                template:"<div>this is b component</div>"
            }
        },
        methods:{
            randonIndex: function () {
                return Math.floor(Math.random() * this.items.length);
            },
            Add:function(){
                this.items.splice(this.randonIndex(),0,this.nextNum++)
            },
            Remove:function(){
                this.items.splice(this.randonIndex(),1)
            },
            Shuffle:function(){
                this.items = _.shuffle(this.items)
            }
        }
    }







    /* new Vue({
         el:"#example",
         data:{
             show:true
         }
     })*/

</script>