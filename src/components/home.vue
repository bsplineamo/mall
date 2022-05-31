<template>
<div>
    <!-- <h1>你好，欢迎来到华北理工大学交通运输系统！</h1> -->
    <!-- <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container> -->
    <el-container>
        <el-header>
    <div class="line"></div>
    
    <el-menu router
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-menu-item index="/LogIn">用户管理</el-menu-item>
        <el-menu-item index="/LogIn">密码修改</el-menu-item>
        <el-menu-item index="/LogIn">退出</el-menu-item>
    </el-submenu>
    <el-menu-item index="/situationmonitoring">态势监控</el-menu-item>
    <!-- <el-menu-item index="3" disabled>专属数据</el-menu-item> -->
    <el-menu-item index="/dataquery">数据查询</el-menu-item>
    <el-menu-item index="/exclusivedata">专属数据</el-menu-item>
</el-menu>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</div>
</template>

<script>
export default {
    name:"HomeView",
    data(){
        return{
            activeIndex: '/dataquery',
            activeIndex2: '/dataquery'
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
/* *{
    padding: 0;
    margin: 0;
} */
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>