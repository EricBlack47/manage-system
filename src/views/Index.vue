<template>
	<div>
		<el-container>
			<!-- 左侧导航栏 开始 -->
			<LeftAside :isCollapse="isCollapse"></LeftAside>
			<el-container>
				<!-- 右侧顶部栏 开始 -->
				<el-header width="100%">
					<TopHead ref="mytop" v-model="isCollapse"></TopHead>
				</el-header>
				<!-- 右侧内容部分 开始 -->
				<el-main width="100%" style="background: #ECECEC;padding: 0;">
					<BodyMain></BodyMain>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import LeftAside from '../components/LeftAside.vue'
	import TopHead from '../components/TopHead.vue'
	import BodyMain from '../components/BodyMain.vue'
	export default {
		data() {
			return {
				isCollapse: false
			}
		},
		created() {
			this.getCollapses
		},
		components: {
			LeftAside,
			TopHead,
			BodyMain
		},
		methods:{
			getCollapses() {
				this.isCollapse = this.$refs.mytop.isCollapse
			}
		}
	}
</script>

<style lang="css" scoped>
	/* 左侧导航栏 开始 */
	.left-side {}

	/* 左侧导航栏 结束 */

	/* 右侧顶部栏 开始 */
	.top-head {
		line-height: 3;
	}

	/* 右侧顶部栏 结束 */

	/* 右侧内容部分 开始 */
	.main-body {
		background-color: #CCCCCC;
	}

	/* 右侧内容部分 结束 */
</style>
