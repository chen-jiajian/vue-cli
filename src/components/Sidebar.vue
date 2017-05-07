<template>
<div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h2 class="text-center">已有时长</h2>
    </div>

    <div class="panel-body">
      <h3 class="text-center">{{ time }} 小时</h3>
    </div>

 
    <div class="panel-heading">
      <h2 class="text-center">待完成</h2>
    </div>

    <div class="panel-body">
      <h3 class="text-center">{{ sum }} 件计划</h3>
    </div>

  </div>
</div>
</template>

<script>
  export default {
    computed: {
        time() {
          return this.$store.state.totalTime
        },
        sum(){
          return this.$store.state.sum
        }
      }
  }
</script>