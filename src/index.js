import Vue from 'vue/dist/vue.js';
import axios from 'axios';

Vue.prototype.$http = axios;

import ComBox from './components/ComBox.vue';
import ComList from './components/ComList.vue';


const vm = new Vue({
	el:'#app',
	data:{
		test:'OjbK'
	},
	methods:{

	},
	computeds:{
		
	},
	components:{
		'box-ly':ComBox,
		'list-ly':ComList
	},
	filters:{

	},
	watch:{

	},
	directives:{

	},
	created () {

	},
	mounted () {

	}
});