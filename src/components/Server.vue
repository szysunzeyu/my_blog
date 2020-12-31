<template>
  <div class="server">
    <el-row class="server_main">
      <el-col :span="4" class="server_left">
        <h2>后台管理界面</h2>
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
        <el-button type="danger" @click="loginOut">退出登录</el-button>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { get } from '@/utils/response'
export default {
  data () {
    return {
      value: '',
      token: '',
      isCollapse: false
    }
  },
  created () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      this.token = localStorage.getItem('token')
      if (this.token === null) {
        this.$router.push('/notAdmin')
      } else {
        get('/admin', { tokenKey: this.token }).then((res) => {
          if (res.data.status !== 200) {
            this.$router.push('/notAdmin')
          }
        }).catch(() => {})
      }
    },
    addblog () {
      this.$router.push('/Editor')
    },
    delblog () {
      this.$router.push('/DelBlog')
    },
    loginOut () {
      this.$message({
        message: '退出成功，即将返回登录界面',
        type: 'success'
      })
      setTimeout(() => {
        localStorage.removeItem('token')
        this.$router.push('/Login')
      }, 1500)
    }
  }
}
</script>

<style scoped>
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
