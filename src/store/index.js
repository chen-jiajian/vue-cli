import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

/*使用vuex*/
Vue.use(Vuex);

/*初始化*/
const state = {
  totalTime: 0,
  sum:0,
  list: []
};

/*初始化store*/
export default new Vuex.Store({
  state,
  mutations,
  actions
})