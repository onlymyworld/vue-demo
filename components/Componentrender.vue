<template>
    <div id="componentrender">
        <anchored-heading :level="level">Hello world!</anchored-heading>
    </div>
</template>
<!--<script type="text/x-template" id="anchored-heading-template">
    <div>
        <h1 v-if="level===1">
            <slot></slot>
        </h1>
        <h2 v-if="level===2">
            <slot></slot>
        </h2>
        <h3 v-if="level===3">
            <slot></slot>
        </h3>
        <h4 v-if="level===4">
            <slot></slot>
        </h4>
        <h5 v-if="level===5">
            <slot></slot>
        </h5>
    </div>
</script>-->
<script>

    var level = {
        render: function (createElement) {
            return createElement(
                    'h' + this.level,   // tag name 标签名称
                    this.$slots.default // 子组件中的阵列
            )
        },
        props:{
            level:{
                type:Number,
                require:true
            }
        }
    }

    export default{
        data(){
            return {level:1}
        },
        components:{
            "anchored-heading":level
        }
    }

</script>