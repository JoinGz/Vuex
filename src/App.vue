<template>
  <div id="app">
    <div class="box">
			<button @click="change">Change</button>
			<p>magic: {{num1}}</p>
		</div>
  </div>
</template>

<script>
	import {mapGetters,mapActions} from "vuex"
	export default {
		computed:mapGetters([
			"num1"
		]),
		methods:mapActions([
			"change"
		])
	}
</script>

<style>
	.box{
		width: 500px;
		height: 200px;
		background: #ccc;
		margin: 0 auto;
	}
	button{
		height: 50px;
		margin: 0 auto;
		display: block;
	}
</style>
