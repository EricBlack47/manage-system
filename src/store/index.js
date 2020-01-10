import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isCollapse:false
	},
	getters:{
		getIsCollapse:state =>{
			return state.isCollapse
		}
	},
	mutations: {
		getTrue(state,bool) {
			state.isCollapse = bool
		},
	},
	actions: {},
	modules: {}
})
