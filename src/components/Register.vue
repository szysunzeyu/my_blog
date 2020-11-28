<template>
  <div class="register">
    <el-row class="register_main">
      <!-- <el-col :span="12" class="hidden-sm-and-down register_main_left"> -->
      <el-col
        :xs="0"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <img
          src="https://some-1258503478.cos.ap-beijing.myqcloud.com/img/register.jpg"
          class="register_main_left_img"
        >
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <div class="register_main_right">
          <p class="register_text">注册页面</p>
          <p class="register_text">Fill the below form to create a new account.</p>
          <div class="register_form">
            <el-form
              :rules="register_rules"
              :model="register_user"
              ref="register_rules"
            >
              <el-form-item prop="uname">
                <el-input
                  placeholder="请输入昵称"
                  v-model="register_user.uname"
                  type="text"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-user"
                  ></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="uemail">
                <el-input
                  placeholder="请输入邮箱"
                  v-model="register_user.uemail"
                  type="text"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-message"
                  ></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="upwd">
                <el-input
                  placeholder="请输入密码"
                  v-model="register_user.upwd"
                  type="password"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-key"
                  ></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="upwd2">
                <el-input
                  placeholder="请再次输入密码"
                  v-model="register_user.upwd2"
                  type="password"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-key"
                  ></i>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-row
            type="flex"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="6">
              <el-button
                type="primary"
                plain
              >登录</el-button>
            </el-col>
            <el-col :span="6">
              <el-button
                type="success"
                plain
              >注册</el-button>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <p class="register_text">Copyright © 2020 HR Tech Lab • STAFF</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.register_user.upwd2 !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.register_user.upwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      checked: true,
      register_user: {
        uname: '',
        upwd: '',
        upwd2: '',
        uemail: ''
      },
      register_rules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        upwd: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        upwd2: [
          { validator: validatePass2, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.register {
  width: 100vw;
  height: 100vh;
  background-color: #cfd2e1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register_main {
  background-color: #eff2f7;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.register_main_left {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.register_main_left_img {
  width: 100%;
  height: 100%;
}
.register_main_right {
  background-color: #ffffff;
}
.register_text {
  box-sizing: border-box;
  margin: 0;
  padding: 0.5rem;
  font-family: nunito, segoe ui, arial;
  font-size: 1rem;
  font-weight: 400;
}
.register_form {
  padding: 1.5rem;
}
</style>
