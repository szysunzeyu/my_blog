<template>
  <div class="server">
    <el-row class="server_main">
      <el-col :span="4" class="server_left">
        <h5>后台管理界面</h5>
        <el-menu
          default-active="1"
          class="Server_menu"
          :collapse="isCollapse"
        >
          <el-menu-item index="1" @click="addblog">
            <i class="el-icon-document-add"></i>
            <span slot="title">增加文章</span>
          </el-menu-item>
          <el-menu-item index="2" @click="delblog">
            <i class="el-icon-document-delete"></i>
            <span slot="title">删除文章</span>
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
export default {
  data () {
    return {
      value: '',
      isCollapse: false
    }
  },
  methods: {
    addblog () {
      this.$router.push('/Editor')
    },
    delblog () {
      this.$router.push('/DelBlog')
    }
  }
}
</script>

<style>
.server {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}
.server_main {
  background-color: #fff;
  height: 100%;
  min-width: 1200px;
}
.server_left {
  background-color: #fff;
  text-align: center;
  height: 100vh;
}
.Server_menu {
  background-color: #fff;
}
</style>
