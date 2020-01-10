<template>
	<div>
		<el-row>
			<el-col :span="2">
				<div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
					<!-- <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
					<i v-show="isCollapse" class="el-icon-d-arrow-right"></i> -->
					<img src="../assets/lefticon.png" width="40%" style="margin-top: 20px;"/>
				</div>
			</el-col>
			<el-col :span="10" :offset="12">
				<el-row style="text-align: right;">
					<el-col :span="4" :offset="8" style="margin-top: 20px;">
						<img src="../assets/find.png" width="30%"/>
					</el-col>
					<el-col :span="4" style="margin-top: 20px;">
						<el-badge :value="100" :max="10" class="item">
							<img src="../assets/news.png" width="75%"/>
						</el-badge>
					</el-col>
					<el-col :span="8" style="margin-top: -10px;">
						<p><img src="../assets/user.png" align="middle" style="padding-right: 10px;">用户名</p>
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
				this.$store.commit("getTrue", true)
			},
		}
	}
</script>

<style>
</style>
