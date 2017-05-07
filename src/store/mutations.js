import * as types from './mutation-types'
/*引入变量*/

export default {
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + Number(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    //向数据流push信息
    state.list.push(
      Object.assign({ name: 'jack', avatar: avatar }, plan)
    );
    state.sum+=1;
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    if(!state.list[idx].completed){
      state.sum=state.sum-1;
    }
    state.list.splice(idx, 1);

    
  },
  // 完成某计划
  [types.FINISH_PLAN] (state, idx) {   
    state.list[idx].completed=true;
    state.sum=state.sum-1;
  },
  // 取消完成某计划
  [types.UNFINISH_PLAN] (state, idx) {   
    state.list[idx].completed=false;
    state.sum=state.sum+1;
  }
  
};