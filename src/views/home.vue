<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 background-color="#545c64"  text-color="#fff"  active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class ="el-icon-menu"></i>
            <span slot="title">
			   <router-link to="/shouye/alluser">用户管理</router-link></span>
          </el-menu-item>

          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/shouye/promanager">商品管理</router-link></span>
          </el-menu-item>

          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default{
  methods:{
    handleOpen(key,keyPath){
      console.log(key,keyPath);
    },
    handleClose(key,keyPath){
      console.log(key,keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu{
  height: 960px;
}
</style>