<template>
    <div id="componentstransition">
        <input type="number" v-model="firstNumber" step="10">+
        <input type="number" v-model="secondNumber" step="10">=
        {{result}}
        <animated-integer v-bind:value="firstNumber"></animated-integer>
        <animated-integer v-bind:value="secondNumber"></animated-integer>
        <animated-integer v-bind:value="result"></animated-integer>

    </div>
</template>

<script>

    /**
     * 通过组件组织过渡
     *
     * */
    var animatedinteger = {
        template:"<span>{{tweeningValue}}</span>",
        props:{
            type:'number',
            require:true
        },
        data:function(){
            return {tweeningValue:0}
        },
        watch:{
            value:function(newValue,oldValue){
                this.tween(oldValue,newValue)
            }
        },
        mounted:function(){
            this.tween(0,this.Value)
        },
        methods:{
            tween: function (startValue, endValue) {
                var vm = this
                function animate (time) {
                    requestAnimationFrame(animate)
                    TWEEN.update(time)
                }
                new TWEEN.Tween({ tweeningValue: startValue })
                        .to({ tweeningValue: endValue }, 500)
                        .onUpdate(function () {
                            vm.tweeningValue = this.tweeningValue.toFixed(0)
                        })
                        .start()
                animate()
            }
        }
    }



    export default{
        data: {
            firstNumber: 20,
            secondNumber: 40
        },
        components:{
            "animated-integer":animatedinteger
        },
        computed: {
            result: function () {
                return this.firstNumber + this.secondNumber
            }
        }
    }


</script>