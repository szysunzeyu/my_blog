<template>
  <main class="login_main">
    <h1 class="login_h1">后台登陆</h1>
    <el-form class="login_form">
      <el-form-item label="用户名">
        <el-input v-model="input_name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  type="password" v-model="input_password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login_btn"
          @click="get_user_pwd()"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script>
import { post, get } from '@/utils/response'

export default {
  data () {
    return {
      name: '',
      password: '',
      input_name: '',
      input_password: ''
    }
  },
  mounted () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      var token = localStorage.getItem('token')
      if (token !== null) {
        get('/admin', { tokenKey: token }).then((res) => {
          if (res.data.data.status === 200) {
            this.$router.push('/Server')
          }
        }).catch(() => {})
      }
    },
    get_user_pwd () {
      post('/admin', { uname: this.input_name, upwd: this.input_password })
        .then(res => {
          if (res.data.length === 0) {
            this.$message.error('用户名或名密码错误！')
          } else {
            localStorage.setItem('token', res.data.tokenKey)
            this.$message({
              message: '登陆成功！',
              type: 'success'
            })
            this.$router.push('/Server')
          }
        }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.login_main {
  background: #f4f4f4;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_h1 {
  position: fixed;
  top:10%;
}
.login_form {
  box-sizing: border-box;
  padding: 25px;
  background-color: #fff;
  min-width: 17vw;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #dadada;
}
.login_btn {
  width: 100%;
}
</style>
