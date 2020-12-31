<template>
  <el-container>
    <el-header class="home_menu">
      <el-row type="flex">
        <el-col
          :sm="{span:18}"
          :xs="{span:18}"
          :span="4"
        >
          <a
            class="title_a"
            href="#"
          >
            <h1>SZY.Halo</h1>
          </a>
        </el-col>
        <!--        头部菜单栏-->
        <el-col
          :span="20"
          class="hidden-sm-and-down head_div"
        >
          <el-row>
            <el-col
              :span="3"
              class="vertical"
            >
              <el-link
                icon="el-icon-s-home"
                type="primary"
                href="/blogCard"
              >首页</el-link>
            </el-col>
            <el-col
              :span="3"
              class="vertical"
            >
              <el-link
                icon="el-icon-brush"
                href="/Project"
              >项目</el-link>
            </el-col>
            <el-col
              :span="3"
              class="vertical"
            >
              <el-link
                icon="el-icon-chat-dot-round"
                href="/About"
                type="success"
              >关于</el-link>
            </el-col>
            <el-col
              :span="3"
              class="vertical"
            >
              <el-link
                icon="el-icon-monitor"
                type="warning"
                href="/Login"
              >后台</el-link>
            </el-col>
          </el-row>
        </el-col>
        <!-- 自适应 -->
        <el-col
          :span="6"
          class="hidden-md-and-up"
        >
          <!-- 添加按钮,点击弹出drawer -->
          <el-button
            @click="drawer = true"
            class="el-icon-s-fold movie_btn"
          ></el-button>
        </el-col>
      </el-row>
      <el-drawer
        class="drawer"
        size="60%"
        title="菜单"
        :visible.sync="drawer"
        :with-header="false"
        :modal-append-to-body="false"
      >
        <div class="navbar">
          <div class="navbar_head">
            <a class="navbar__brand">
              <img
                src="../assets/Avatar.jpg"
                alt="头像"
                class="navbar_logo"
              />
              <strong class="navbar__title">泽宇的前端小站</strong>
            </a>
          </div>
          <div class="navbar_main">
            <div class="navbar_menu">
              <ul class="menu_list">
                <li class="menu_list_item">
                  <a
                    class="menu_link"
                    href="/blogCard"
                  >首页</a>
                </li>
                <li class="menu_list_item">
                  <a
                    class="menu_link"
                    href="/Project"
                  >项目</a>
                </li>
                <li class="menu_list_item">
                  <a
                    class="menu_link"
                    href="/About"
                  >关于</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-drawer>
    </el-header>
    <el-container>
      <el-aside
        width="33%"
        class="hidden-sm-and-down"
      >
        <el-row>
          <el-col :span="24">
            <img
              class="tou_xiang"
              src="../assets/Avatar.jpg"
              alt="头像"
            />
          </el-col>
          <el-col :span="24">
            <p style="font-size: 30px;color: white;margin-bottom: 0;">孙泽宇的个人网站</p>
          </el-col>
          <el-col :span="24">
            <!-- 分割线 -->
            <el-divider></el-divider>
          </el-col>
          <el-row>
            <el-col :span="24">
              <div class="snowflake1 snowflake">❄</div>
              <div class="snowflake2 snowflake">❄</div>
              <div class="snowflake3 snowflake">❄</div>
              <div class="snowflake4 snowflake">❄</div>
              <div class="snowflake5 snowflake">❄</div>
              <div class="snowflake6 snowflake">❄</div>
              <div class="snowflake7 snowflake">❄</div>
              <div class="snowflake8 snowflake">❄</div>
              <div class="snowflake9 snowflake">❄</div>
              <div class="snowflake10 snowflake">❄</div>
              <div class="snowflake11 snowflake">❄</div>
              <div class="snowflake12 snowflake">❄</div>
              <h1 class="greeting">🎄 冬日快乐 ❄️</h1>
              <div class="snowperson">
                <div class="topHead">
                  <div class="leftEye"></div>
                  <div class="rightEye"></div>
                  <div class="nose"></div>
                  <div class="mouth1"></div>
                  <div class="mouth2"></div>
                  <div class="mouth3"></div>
                  <div class="mouth4"></div>
                </div>
                <div class="midBody">
                  <div class="button1"></div>
                  <div class="button2"></div>
                  <div class="button3"></div>
                  <div class="leftArm"></div>
                  <div class="leftHand"></div>
                  <div class="rightArm"></div>
                  <div class="rightHand"></div>
                </div>
                <div class="bottomBody"></div>
              </div>
            </el-col>
          </el-row>
          <el-col :span="24">
            <el-divider></el-divider>
          </el-col>
          <el-row>
            <el-col :span="24">
              <a>
                <p style="text-align: center; color:white;">Hello World|©鲁ICP备:20006692号</p>
              </a>
            </el-col>
          </el-row>
        </el-row>
      </el-aside>
      <!-- 右侧界面 -->
      <el-main>
        <router-view class="animate__animated animate__fadeInDown"></router-view>
      </el-main>
    </el-container>
    <el-footer class="hidden-md-and-up">
      <el-divider></el-divider>
      <el-row>
        <el-col :span="24">
          <a>
            <p style="text-align: center;color: white;">Hello World! || ©鲁ICP备2020047368号</p>
          </a>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      drawer: false
    }
  },
  methods: {}
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.title_a:link {
  color: black;
}
.title_a:visited {
  color: black;
}
.home_menu {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding-right: 0;
  border-bottom: 1px solid #e2e2e2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
}
.el-aside {
  box-sizing: border-box;
  padding: 50px;
  margin-top: 50px;
}

.movie_btn {
  box-sizing: border-box;
  margin: 1.5vh;
}
.el-menu {
  border-bottom: 0 !important;
}
.btn_a {
  width: 100%;
  height: 100%;
}
.vertical {
  border-right: 1px solid #e2e2e2;
  text-align: center;
}
.head_div {
  box-sizing: border-box;
  margin-top: 20px;
}
.el-main {
  margin: 75px 30px;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
}

.tou_xiang {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.navbar_head {
  display: flex;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  padding: calc(1rem * 0.5) 1rem;
}
.navbar__brand {
  align-items: center;
  display: flex;
  font-weight: 700;
  height: 2rem;
  margin-right: 1rem;
}
.navbar_logo {
  border-radius: 50%;
  height: 100%;
  margin-right: 0.5rem;
}
.navbar_main {
  padding: 0.5rem;
}
.navbar_menu {
  text-decoration: none;
  font-weight: 500;
  overflow-x: hidden;
}
.menu_list {
  list-style: none;
  margin: 0;
  padding-right: 0;
}
.menu_list_item {
  margin: 0.25rem 0;
}
.menu_link {
  color: #606770;
  line-height: 40px;
  padding: 0.375rem 1rem;
}
.menu_link:active {
  color: #007be2;
}
.rot_img {
  width: 100%;
  height: 100%;
}
.snowflake {
  position: absolute;
  color: snow;
  opacity: 0;
}
.snowflake1 {
  left: 35px;
  animation: snow 10s ease infinite;
}
.snowflake2 {
  left: 50px;
  animation: snow 6s ease infinite;
  animation-delay: 3s;
}
.snowflake3 {
  left: 77px;
  animation: snow 4s ease infinite;
  animation-delay: 1s;
}
.snowflake4 {
  left: 120px;
  animation: snow 8s ease infinite;
  animation-delay: 1s;
}
.snowflake5 {
  left: 140px;
  animation: snow 8s ease infinite;
  animation-delay: 2s;
}
.snowflake6 {
  left: 180px;
  animation: snow 6s ease infinite;
  animation-delay: 3s;
}
.snowflake7 {
  left: 225px;
  animation: snow 7s ease infinite;
  animation-delay: 1s;
}
.snowflake8 {
  left: 255px;
  animation: snow 9s ease infinite;
  animation-delay: 6s;
}
.snowflake9 {
  left: 300px;
  animation: snow 6s ease infinite;
  animation-delay: 6s;
}
.snowflake10 {
  left: 310px;
  animation: snow 7s ease infinite;
  animation-delay: 2s;
}
.snowflake11 {
  left: 322px;
  animation: snow 8s ease infinite;
  animation-delay: 3s;
}
.snowflake12 {
  left: 50px;
  animation: snow 8s ease infinite;
  animation-delay: 3s;
}
.greeting {
  font-size: 1.75rem;
  text-align: center;
  font-family: "Homemade Apple", cursive;
  color: gold;
  margin-top: 50px;
  margin-bottom: 0px;
  padding: 0;
  animation: pulse 3s linear infinite;
}
.snowperson {
  position: relative;
  top: -50px;
}

.topHead {
  width: 100px;
  height: 100px;
  background-color: snow;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  top: 95px;
}

.leftEye {
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.rightEye {
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 20px;
  left: 50px;
}

.nose {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 45px solid orange;
  position: absolute;
  top: 35px;
}

.mouth1 {
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 60px;
  left: 25px;
}

.mouth2 {
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 65px;
  left: 30px;
}

.mouth3 {
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 65px;
  left: 38px;
}

.mouth4 {
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 60px;
  left: 45px;
}

.leftArm {
  background-color: brown;
  width: 75px;
  height: 10px;
  position: relative;
  z-index: 0;
  transform: rotate(20deg);
  top: 25px;
  left: -55px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.leftHand {
  width: 25px;
  height: 10px;
  background-color: brown;
  position: relative;
  left: -75px;
  top: 3px;
}

.rightHand {
  width: 25px;
  height: 10px;
  background-color: brown;
  position: relative;
  left: 185px;
  top: -17px;
}

.rightArm {
  background-color: brown;
  width: 75px;
  height: 10px;
  position: relative;
  z-index: 2;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transform: rotate(-20deg);
  top: 5px;
  left: 115px;
}

.midBody {
  width: 150px;
  height: 150px;
  background-color: snow;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  top: 75px;
}

.button1 {
  background-color: black;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 20px;
  left: 50px;
}

.button2 {
  background-color: black;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50px;
  left: 50px;
}

.button3 {
  background-color: black;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 80px;
  left: 50px;
}

.bottomBody {
  width: 200px;
  height: 200px;
  background-color: snow;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  top: 18px;
}
.el-divider {
  margin: 0;
  padding: 0;
}
@keyframes snow {
  0% {
    top: 0;
    transform-origin: center;
    opacity: 0;
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(25px);
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 1;
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(50px);
    transform-origin: center;
    opacity: 0;
  }
  100% {
    top: 100%;
  }
}
</style>
