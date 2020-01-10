<template>
	<div>
		<!-- 用户信息 -->
		<div class="user-info" style="width: 100%;">
			<el-row>
				<el-col :span="6" style="margin-left: 10px;">
					<!-- 客户端 -->
					<div class="user-title">
						<p style="font-size: 14px;">客户端/首页</p>
					</div>
					<!-- 用户 -->
					<div style="margin-bottom: 20px;">
						<el-row>
							<!-- 用户头像信息 -->
							<el-col :span="16" :offset="1">
								<el-row>
									<!-- 头像 -->
									<el-col :span="8">
										<div>
											<img src="../assets/user-img.png" width="100%" />
										</div>
									</el-col>
									<!-- 信息 -->
									<el-col :span="16" style="text-align: center;">
										<div class="user-name">
											<p style="font-size: 18px;margin-top: 5px;">曲丽丽</p>
										</div>
										<div class="user-partment">
											<p style="font-size: 12px;">xxx部门&nbsp;&nbsp;|&nbsp;&nbsp;xxx职位</p>
										</div>
									</el-col>
								</el-row>
							</el-col>
						</el-row>
					</div>
				</el-col>
				<!-- 信息量 -->
				<el-col :span="10" :offset="7">
					<el-row style="text-align: center;margin-top: 70px;">
						<div v-for="(item,index) in list4" :key="index">
							<el-col :span="6">
								<div :class="item.type==1?'right-box':(item.type ==2?'right-box2':'right-box2')" v-if="index < 3">
									<p style="margin-top: 5px;">{{item.type==1?"已驳回":(item.type==2?"审评中":(item.type == 3?"复核中":"已通过"))}}</p>
									<span>{{item.number}}</span>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="right-box3" v-if="index==3">
									<p style="margin-top: 5px;">{{item.type==1?"已驳回":(item.type==2?"审评中":(item.type == 3?"复核中":"已通过"))}}</p>
									<span>{{item.number}}</span>
								</div>
							</el-col>
						</div>
					</el-row>
				</el-col>
			</el-row>
		</div>
		<!-- container -->
		<div>
			<el-row>
				<!-- 左侧信息 -->
				<el-col :span="16" style="padding: 15px 0 0 20px;">
					<!-- 最新动态 -->
					<div>
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>最新动态</span>
							</div>
							<div style="margin-bottom: 10px;">
								<div v-for="(item,index) in list1" :key="index" style="margin-left: 10px;">
									<el-row>
										<el-col :span="20">
											<el-row>
												<el-col :span="3" style="margin-top: 25px;">
													<img src="../assets/user-head.png" />
												</el-col>
												<el-col :span="12" style="color: gray;">
													<p>{{item.name}}</p>
													<p>{{"复核："+item.checker}}</p>
													<p>{{"已等待："+item.usedtime}}</p>
												</el-col>
											</el-row>
										</el-col>
										<el-col :span="4" style="text-align: right;margin-top: 5px;">
											<div :class="item.state==1?'blue-color':(item.state==2?'yellow-color':(item.state==3?'red-color':'blue-color'))">
												<p style="font-size: 14px;">{{item.state==1?"等待复核":(item.state==2?"等待评审":(item.state==3?"已驳回":"等待复核"))}}</p>
											</div>
											<div style="margin-top: 35px;">
												<el-button type="info" plain>催办</el-button>
											</div>
										</el-col>
									</el-row>
									<el-divider style="margin: 12px 0;"></el-divider>
								</div>
							</div>
						</el-card>
					</div>
					<!-- 我的图纸 -->
					<div style="margin-top: 13px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>我的图纸</span>
								<el-button style="float: right; padding: 3px 0" type="text">全部动态</el-button>
							</div>
							<div>
								<div v-for="(item,index) in list2" :key="index">
									<div style="margin-left: 20px;width: 30%;float: left;">
										<p><img src="../assets/ss.png" style="width: 10%;padding-right: 10px;" align="top">{{item.name}}</p>
										<p>{{item.message}}</p>
										<div>
											<el-row>
												<el-col :span="15">
													<p>{{item.partment}}</p>
												</el-col>
												<el-col :span="8" style="text-align: right;">
													<p>{{item.uptime+"小时前"}}</p>
												</el-col>
											</el-row>
										</div>
									</div>
								</div>
							</div>
							<el-divider class="cutline"></el-divider>
							<el-divider direction="vertical" class="verticalline1"></el-divider>
							<el-divider direction="vertical" class="verticalline2"></el-divider>
						</el-card>
					</div>
					<!-- 最新学习资料 -->
					<div style="margin: 13px 0 60px 0;">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>最新学习资料</span>
								<el-button style="float: right; padding: 3px 0" type="text">全部动态</el-button>
							</div>
							<div>
								<div v-for="(item,index) in list3" :key="index">
									<div style="margin-left: 20px;width: 30%;float: left;">
										<p><img src="../assets/ss.png" style="width: 10%;padding-right: 10px;" align="top">{{item.name}}</p>
										<p>{{item.message}}</p>
									</div>
								</div>
							</div>
							<el-divider class="cutline2"></el-divider>
							<el-divider direction="vertical" class="verticalline3"></el-divider>
							<el-divider direction="vertical" class="verticalline4"></el-divider>
						</el-card>
					</div>
				</el-col>
				<!-- 右侧信息 -->
				<el-col :span="8" style="padding: 15px;">
					<!-- 作业分类 -->
					<div class="homework-kinds">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>作业分类/便捷导航</span>
							</div>
							<el-row>
								<div class="homework-tags">
									<div v-for="(item,index) in dynamicTags" :key="index">
										<el-col :span="4" style="margin: 5px 15px 10px 15px;">
											<el-link type="primary">{{item}}</el-link>
										</el-col>
									</div>
									<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
									</el-input>
									<el-button v-else class="button-new-tag" size="small" style="margin: 5px 0 0 5px;" @click="showInput">+&nbsp;添加</el-button>
								</div>
							</el-row>
						</el-card>
					</div>
					<!-- 日期 -->
					<div style="margin-top: 13px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>2019年7月24日</span>
							</div>
							<div class="daliy-time" style="text-align: center;">
								<p style="margin: 0px auto;">第30周</p>
								<p style="font-size:96px;margin: 0 auto">24</p>
								<p style="margin: 0 auto;margin-bottom: 20px;">wednstady</p>
							</div>
							<div class="keeper-name" style="background: #E4E4E4;">
								<el-row>
									<el-col :span="6" style="text-align: center;">
										<p style="font-size: 28px;margin-left: 10px;color: #FFFFFF;">值班人员</p>
									</el-col>
									<el-col :span="2" style="text-align: center;margin-left: 10px;">
										<div style="border-left: 2px solid #FFFFFF;height: 95px;margin-top:18px;"></div>
									</el-col>
									<el-col :span="10">
										<p style="color: #FFFFFF;font-size: 23px;">李艳华</p>
										<p style="color: #FFFFFF;font-size: 23px;">1388888888</p>
									</el-col>
									<el-col :span="4">
										<img src="../assets/phone.png" width="80%" style="margin: 40px 0 0 15px" />
									</el-col>
								</el-row>
							</div>
							<!-- 统计图 -->
							<div style="width: 350px;height: 305px;" ref="chart2"></div>
						</el-card>
					</div>
					<!-- 审批统计 -->
					<div style="margin-top: 13px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>审批统计</span>
							</div>
							<!-- 统计图 -->
							<div style="width: 350px;height: 560px;" ref="chart"></div>
							<!-- 上次统计时间 -->
							<div style="margin-top: 10px;border-top: 2px solid #ECECEC;width: 100%;">
								<el-row>
									<el-col :span="20">
										<p style="font-size: 14px;color: gray;">上次更新时间：2019-12-31 09:15 32</p>
									</el-col>
									<el-col :span="4" style="text-align: right;">
										<img src="../assets/more.png" style="margin-top: 20px;width: 40%;" />
									</el-col>
								</el-row>
							</div>
						</el-card>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	const echarts = require('echarts');
	export default {
		data() {
			return {
				list1: [{
						name: "xxx1的作业",
						checker: "罩得住",
						usedtime: "6",
						state: 1
					},
					{
						name: "xxx2的作业",
						checker: "罩得住",
						usedtime: "6",
						state: 2
					},
					{
						name: "xxx3的作业",
						checker: "罩得住",
						usedtime: "6",
						state: 3
					},
					{
						name: "xxx4的作业",
						checker: "罩得住",
						usedtime: "6",
						state: 1
					},
					{
						name: "xxx5的作业",
						checker: "罩得住",
						usedtime: "6",
						state: 1
					}
				],
				list2: [{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "行政部",
						uptime: "5"
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "仓库",
						uptime: "5"
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "蜂鸟项目",
						uptime: "5"
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "凤蝶金英小分队",
						uptime: "5"
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "蜂鸟项目",
						uptime: "5"
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
						partment: "蜂鸟项目",
						uptime: "5"
					}
				],
				list3: [{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					},
					{
						name: "12月盘点报告",
						message: "这是一条信息这是一条信息这是一条信息这是一条信息",
					}
				],
				dynamicTags: ['标签一', '标签二', '标签三', '标签四', '标签五'],
				inputVisible: false,
				inputValue: '',
				list4: [{
						type: 1,
						number: 8
					},
					{
						type: 2,
						number: 28
					},
					{
						type: 3,
						number: 38
					},
					{
						type: 4,
						number: 448
					}
				]
			}
		},
		mounted() {
			this.initCharts();
		},
		methods: {
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					window.console.log(_)
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			// 统计图
			initCharts() {
				let myChart = echarts.init(this.$refs.chart); //堆叠统计图
				let myChart2 = echarts.init(this.$refs.chart2); //环形统计图
				myChart.setOption({
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true,
							top: '0',
							height: '500px'
						},
						xAxis: {
							type: 'value'
						},
						yAxis: {
							type: 'category',
							data: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-8', '2019-9',
								'2019-10', '2019-11', '2019-12'
							]
						},
						series: [{
								name: '直接访问',
								type: 'bar',
								stack: '总量',
								label: {
									show: true,
									position: 'insideRight'
								},
								data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330]
							},
							{
								name: '邮件营销',
								type: 'bar',
								stack: '总量',
								label: {
									show: true,
									position: 'insideRight'
								},
								data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
							},
							{
								name: '联盟广告',
								type: 'bar',
								stack: '总量',
								label: {
									show: true,
									position: 'insideRight'
								},
								data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
							},
							{
								name: '视频广告',
								type: 'bar',
								stack: '总量',
								label: {
									show: true,
									position: 'insideRight'
								},
								data: [150, 212, 201, 154, 190, 330, 410, 150, 212, 201, 154, 190]
							},
							{
								name: '搜索引擎',
								type: 'bar',
								stack: '总量',
								label: {
									show: true,
									position: 'insideRight'
								},
								data: [820, 832, 901, 934, 1290, 1330, 1320, 820, 832, 901, 934, 1290]
							}
						],
						legend: {
							data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
							bottom: '5'
						},
					}),
					myChart2.setOption({
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						grid: {
							left: 200,
							height: '500px'
						},
						legend: {
							orient: 'vertical',
							right: 0,
							top: 100,
							data: ['计划作业', '抢修作业', '零时作业', '总额']
						},
						series: [{
								name: '访问来源',
								type: 'pie',
								radius: ['50%', '60%'],
								avoidLabelOverlap: false,
								label: {
									normal: {
										show: false,
										position: 'center'
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								data: [{
										value: 40,
										name: '计划作业'
									},
									{
										value: 100,
										name: '总额'
									},
								]
							},
							{
								name: '访问来源',
								type: 'pie',
								radius: ['35%', '45%'],
								avoidLabelOverlap: false,
								label: {
									normal: {
										show: false,
										position: 'inner'
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								data: [{
										value: 50,
										name: '抢修作业'
									},
									{
										value: 100,
										name: '总额'
									},
								]
							},
							{
								name: '访问来源',
								type: 'pie',
								radius: ['15%', '25%'],
								avoidLabelOverlap: false,
								label: {
									normal: {
										show: false,
										position: 'inner'
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								data: [{
										value: 10,
										name: '零时作业'
									},
									{
										value: 100,
										name: '总额'
									},
								]
							}
						]
					})
			}
		}
	}
</script>

<style lang="css" scoped>
	.text {
		font-size: 14px;
	}

	/* 用户框 */
	.user-info {
		width: 100%;
		background: #FFFFFF;
		margin-top: 2px;
	}

	.user-title {
		padding: 10px 20px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 100%;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}

	.right-box {
		border-right: 1px solid #ECECEC;
		color: red;
	}
	.right-box2 {
		border-right: 1px solid #ECECEC;
		color: gray;
	}
	.right-box3 {
		border-right: 1px solid #ECECEC;
		color: lightgreen;
	}
	.blue-color{
		color: #409EFF;
	}
	.red-color{
		color: red;
	}
	.yellow-color{
		color: yellow;
	}
	.el-divider--horizontal {
		margin: 12px 0;
	}

	/* 分割线 我的图纸 */
	.cutline {
		margin-top: 170px;
	}

	.verticalline1 {
		height: 320px;
		margin-left: -518px;
		margin-top: -170px;
	}

	.verticalline2 {
		height: 320px;
		margin-left: 255px;
		margin-top: -170px;
	}

	/* 分割线 最新学习资料 */
	.cutline2 {
		margin-top: 120px;
	}

	.verticalline3 {
		height: 220px;
		margin-left: -518px;
		margin-top: -125px;
	}

	.verticalline4 {
		height: 220px;
		margin-left: 255px;
		margin-top: -125px;
	}
</style>
