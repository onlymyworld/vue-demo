<template>

    <div id="counter-event-example">
        <custome-component></custome-component>
    </div>
</template>

<script>

    var botton_counter= {
        template:"<button v-on:click='increment'>{{counter}}</button>",
        data: function () {
            return{counter:0}
        },
        methods:{
            increment:function(){
                this.counter +=1;
                this.$emit("increment"); //
            }
        }
    }
    var parent_component ={
        template:'<p>{{total}}</p><button-counter v-on:increment="incrementTotal"></button-counter><button-counter v-on:increment="incrementTotal"></button-counter>',
        data:function(){
            return {total:0}
        },
        methods:{
            incrementTotal:function(){
                this.total +=1;
            }
        }
    }

    export default{
        components:{

            "custome-component":parent_component,
            "button-counter":botton_counter

        }

    }

</script>