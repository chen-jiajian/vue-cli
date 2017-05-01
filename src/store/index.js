import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: []
};

/*初始化store*/
export default new Vuex.Store({
  state,
  mutations,
  actions
})