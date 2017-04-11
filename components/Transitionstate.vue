<template>
    <div id="tansitionstate">
        <input type="number" v-model.number="number" step="20" />
        <p>{{animatedNumber}}</p>



        <input v-model="colorQuery" @keyup.enter="updateColor" placeholder="please input a color">
        <button @click="updateColor">update</button>
         <p>preview:</p>
        <span v-bind:style="{backgroundColor:tweenedCSSColor}" class="example-7-color-preview"></span>
        <p>{{tweenedCSSColor}}</p>
    </div>




</template>

<script>

    /**
     * 状态动画与watcher
     * 通过watcher我们能监听到任何数值属性的数值变化，使用tweenjs的例子
     * 当数值更新时，就会触发动画，但是对于不能直接像数值一样存储的值，比如css中的值
     * 利用color.js实现；
     * */
    var Color = net.brehaut.Color;
    export default{
        data(){
            return{
                number:0,
                animatedNumber:0,
                colorQuery:'',
                color:{
                    red:0,
                    green:0,
                    blue:0,
                    alpha:1
                },
                tweenedColor:{}
            }
        },
        created:function(){
            this.tweenedColor =Object.assign({},this.color);
        },
        watch:{
            number: function (newValue,oldValue) {
                var vm = this;
                function animate(time){
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                new TWEEN.Tween({tweeningNumber:oldValue})
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .to({tweeningNumber:newValue},500)
                        .onUpdate(function(){
                            vm.animatedNumber = this.tweeningNumber.toFixed(0)
                        })
                        .start()
                animate();
            },
            color:function(){
                function animate(time){
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                new TWEEN.Tween(this.tweenedColor)
                        .to(this.color,750)
                        .start()
                animate();
            }
        },
        computed:{
            tweenedCSSColor: function () {
                return new Color({
                    red:this.tweenedColor.red,
                    green:this.tweenedColor.green,
                    blue:this.tweenedColor.blue,
                    alpha:this.tweenedColor.alpha
                }).toCSS();
            }
        },
        methods:{
            updateColor: function () {
                this.color =new Color(this.colorQuery).toRGB();
                this.colorQuery=''
            }
        }
    }



</script>