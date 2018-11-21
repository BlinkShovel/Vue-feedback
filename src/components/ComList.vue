<template>
	<div class="list">
		<h2>list组件</h2>
		<ul>
			<li v-for="item in list" :key="item.id">
				<span>id:{{item.id}}</span>
				<span>name:{{item.name}}</span>
				<br>
				<span>{{item.content}}</span>
				<span>{{item.date | dateFomat}}</span>
				<hr>
			</li>
		</ul>
	</div>
</template>
<script>
	import bus from './bus.js';
		var vm;
	export default {
		data () {
			vm = this;
			return {
				list:[]
			}
		},
		methods:{
			async getList () {
				const {data:res} = await this.$http.get('http://localhost:3000/brands');
				this.list = res;
			}
		},
		created () {
			this.getList();
			bus.$on('g',this.getList);
		},
		filters:{
			dateFomat:(v)=>{
				return vm.$moment(v).format('YYYY-MM-DD hh:mm:ss A');
			}
		}
	}
</script>
<style>
	.list {
		background: skyblue;
	}
</style>