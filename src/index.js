import Vue from 'vue/dist/vue.js';
import axios from 'axios';
import moment from 'moment';

Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;	

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