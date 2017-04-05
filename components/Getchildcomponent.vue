<template>

    <div id="parent">
        <child ref="profile"></child>
    </div>
</template>

<script>

    /**
     * 若javascript 需要直接访问子组件，就需要使用ref给子组件给定一个唯一的索引id*/
    var parent = new Vue({
        el:"#parent"
    });
    //访问子组件
    var child = parent.refs.profile;

</script>