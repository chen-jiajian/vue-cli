<!--动态导入siderbar组件-->
<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
  }
</script>


<template>
  <div id="wrapper">
  <!--导航-->
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          vue-cli构建计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
   <div class="container">
    <div class="col-sm-3">
      <!--显示总时长组件-->
      <sidebar></sidebar>
    </div>
    <div class="col-sm-9">    
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

