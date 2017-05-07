import * as types from './mutation-types'

export default {
  /*添加减少总时长*/
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  /*添加删除计划*/
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  //完成计划
  finishPlan({commit}, plan){
    commit(types.FINISH_PLAN, plan)
  },
  unfinishPlan({commit}, plan){
    commit(types.UNFINISH_PLAN, plan)
  },
};