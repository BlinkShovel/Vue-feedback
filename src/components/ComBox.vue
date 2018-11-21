<template>
	<div class="box">
		<h2>box组件</h2>
		<span>评论人：</span>
		<input type="text" v-model="name">
		<br>
		<br>
		<br>
		<span>留言：</span>
		<textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
		<button :disabled="name.trim().length == 0 || content.trim().length == 0" @click="addFeed">发表留言</button>
	</div>
</template>
<script>
	import bus from './bus.js';
	export default {
		data () {
			return {
				name:'',
				content:''
			}
		},
		methods:{
			addFeed(){
				// console.log(this.$http);
				this.$http.post('http://localhost:3000/brands',{name:this.name,content:this.content})
				.then(res => {
					bus.$emit('g');
					this.name = '';
					this.content = '';
				})
			}
		}
	}
</script>
<style>
	.box {
		background: purple;
		width: 800px;
		height: 350px;
		border: 1px solid #ccc;
	}
</style>