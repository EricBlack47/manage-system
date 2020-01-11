<template>
	<div>
		<el-menu style="height: 100%;" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<!-- 作业审批管理系统 -->
			<div class="app-side-logo" >
				<p>作业审批管理系统</p>
			</div>
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航一</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<span slot="title">选项4</span>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		props:['isCollapse'],
		data() {
			return {
				
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				window.console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				window.console.log(key, keyPath);
			},
		},
	}
</script>

<style lang="css" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.app-side-logo p {
		color: #FFFFFF;
		text-align: center;
		font-size: 14px;
		line-height: 3;
		background-color: #545c64;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	
</style>
