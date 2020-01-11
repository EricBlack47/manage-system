<template>
	<div>
		<el-row>
			<el-col :span="2">
				<div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
					<img src="../assets/lefticon.png" width="40%" style="margin-top: 20px;" />
				</div>
			</el-col>
			<el-col :span="10" :offset="12">
				<el-row style="text-align: right;">
					<el-col :span="4" :offset="8" style="margin-top: 20px;">
						<img src="../assets/find.png" width="30%" />
					</el-col>
					<el-col :span="4" style="margin-top: 20px;">
						<el-dropdown>
							<el-badge :value="100" :max="10" class="item">
								<img src="../assets/news.png" width="75%" />
							</el-badge>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>消息1</el-dropdown-item>
								<el-dropdown-item>消息2</el-dropdown-item>
								<el-dropdown-item>消息3</el-dropdown-item>
								<el-dropdown-item>消息4</el-dropdown-item>
								<el-dropdown-item>消息5</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col :span="8" style="margin-top: -10px;">
						<el-dropdown>
							<p><img src="../assets/user.png" align="middle" style="padding-right: 10px;">用户名</p>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>设置</el-dropdown-item>
								<el-dropdown-item>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						
					</el-col>
				</el-row>
			</el-col>
		</el-row>
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
				this.$emit('input', this.isCollapse)
			}

		}
	}
</script>

<style>
</style>
