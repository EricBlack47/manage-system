<template>
	<div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
		<i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
		<i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			}
		},
		methods: {
			toggleSideBar() {
				this.isCollapse = !this.isCollapse
				this.$store.commit("getTrue", true)
			},
		}
	}
</script>

<style>
</style>
