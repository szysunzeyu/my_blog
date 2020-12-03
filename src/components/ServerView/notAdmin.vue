<template>
  <div class="notAdmin">您还没有登录！3秒后自动跳转到登陆界面</div>
</template>

<script>
export default {
  mounted () {
    this.backLogin()
  },
  methods: {
    backLogin () {
      setTimeout(() => {
        this.$router.push('/Login')
      }, 3000)
    }
  }
}
</script>

<style scoped>
.notAdmin {
  background-color: #f4f4f4;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
