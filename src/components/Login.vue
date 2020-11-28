<template>
    <main>
        <div class="container">
        <form action="#" class="login-form">
          <h2>请 登 录</h2>
          <input
            type="text"
            name="username"
            placeholder="用户名"
          />
          <input
            type="password"
            name="password"
            placeholder="密码"
          />
          <button class="btn" type="submit">登录</button>
        </form>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style>
main{
    margin: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3453&q=80")
    fixed no-repeat;
  background-size: cover;
  text-align: center;
}
.login-form {
  width: 240px;
  height: 220px;
  padding: 40px;
  overflow: hidden;
  box-shadow: 10px 10px 5px #888888;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  background: inherit;
}
.login-form h2 {
  font-size: 18px;
  font-weight: 400;
  color: #3d5245;
}
.login-form input,
.login-form button {
  outline-style: none;
  margin: 6px 0;
  height: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5245;
}
.btn {
  background-color: rgba(57, 88, 69, 0.4);
  transition: 0.4s;
  cursor:pointer;
}
.login-form button:hover {
  background-color: rgba(12, 80, 38, 0.67);
}
</style>
