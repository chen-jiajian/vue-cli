
<template>
  <div>
    <!--//`v-if`是vue的一个指令
    //`$route.path`是当前路由对象的路径，会被解析为绝对路径当
    //`$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。
    //to 路由跳转地址-->
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p><!--如果没有计划就显示-->

      <div class="list-group">
     
        <a class="list-group-item a_list" v-for="(plan,index) in plans" v-bind:class="{ complete:plan.completed }">
          <div class="row " >
            <div class="col-sm-2 user-details">

            <!--
            `:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`
             比如a标签的`href`可以写为`:href`
            并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析
            -->

              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-6 comment-section">
              <p>{{ plan.comment }}</p>
            </div>

            <div class="col-sm-2">
              <button
                class="btn btn-xs btn-danger delete-button btn_delete"
                @click="deletePlan(index)">
              X
              </button>

              <div>
              <button v-if="!plan.completed" class="btn btn-sm btn-primary btn_finish"
                @click="finishPlan(index)" >
                 完成
              </button>
              <button v-if="plan.completed" class="btn btn-sm btn-warning btn_finish"
                 @click="unfinishPlan(index)">
                 未完成
              </button>
              </div>
            
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
    /*$("[name='my-checkbox']").bootstrapSwitch();

    $("[name='i-checkbox']").each(function() {
            $this = $(this);
            var onText = $this.attr("onText");
            var offText = $this.attr("offText");
            var labelText = $this.attr("labelText");

            var $switch_input = $(" :only-child", $this);
            $switch_input.bootstrapSwitch({
                onText : onText,
                offText : offText,
                labelText : labelText
            });
        });*/
    export default {
        name : 'TimeEntries',
        computed : {
          plans () {
            // 从store中取出数据
            return this.$store.state.list
          }
        },
        methods : {
          deletePlan(idx) {
            // 稍后再来说这里的方法
            // 减去总时间
            this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
            // 删除该计划
           
            this.$store.dispatch('deletePlan',idx)
            
          },
          finishPlan(idx){
            if(!this.$store.state.list[idx].completed){

              this.$store.dispatch('finishPlan',idx);
            }
            
          },
          unfinishPlan(idx){
            if(this.$store.state.list[idx].completed){
              this.$store.dispatch('unfinishPlan',idx);
            }
          }
        }
    }
</script>


<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
  .btn_finish{
    margin-top:30%;
    margin-left:50%;
  }
  .btn_delete{
    float:right;
  }
  .complete{
    border:1px solid #43bc86;
  }
  .a_list{
    margin-top:10px;
  }
</style>