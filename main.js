/**
	* Created by YueFang on 2017/3/29.
	*/

/*
import Vue from "vue"
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
	store,
	el:'body',
	components:{ App }
})*/

import Vue from 'vue'
import App from './components/App.vue'

new Vue({
	el:'body',
	components:{ App }
});












/*

new Vue({
	el:'#message',
	data:{
		message:"hello world!"
	}
});

var vm  = new Vue({
	el:"#computed",
	data:{
		a:4
	},
	computed:{
		aDouble: function (){
			return this.a * 2;
		},
		aPlus:{
			get: function (){
				return this.a +1;
			},
			set: function (v) {
				this.a = v-1;
			}
		}
	}
});

/!*var Comp = Vue.extend({
	props:['msg'],
	template:"<div>{{msg}}</div>"
})
var vmm = new Comp({
	propsData:{
		msg:"hello world"
	}
})*!/
Vue.component("hello",{
	props:['msg'],
	template:"<span>{{ msg }}</span>"
})
Vue.component('child', {
	// 声明 props
	props: ['message'],
	// 就像 data 一样，prop 可以用在模板内
	// 同样也可以在 vm 实例中像 “this.message” 这样使用
	template: '<span>{{ message }}</span>'
})

Vue.component('myMessage', {
	// camelCase in JavaScript
	props: ['myMessage'],
	template: '<span>{{ myMessage }}</span>'
})


var child = {
	template:"<div>a coustom Components.vue</div>"
}
new Vue({
	component:{
		'my-component':child
	}
})
*/
/*

Vue.component('my-component',{
	template:"<div>a coustom Components.vue</div>"
});
new Vue({
	el:"#example"
})*/
