<template>
  <el-container>
    <el-header class="home_menu">
      <el-row type="flex">
        <el-col :sm="{span:18}" :xs="{span:18}" :span="4">
          <a class="title_a" href="#">
            <h1>SZY.Halo</h1>
          </a>
        </el-col>
        <!--        头部菜单栏-->
        <el-col :span="20" class="hidden-sm-and-down head_div">
          <el-row>
            <el-col :span="3" class="vertical">
              <el-link icon="el-icon-s-home" type="primary" href="/Welcome">首页</el-link>
            </el-col>
            <el-col :span="3" class="vertical">
              <el-link icon="el-icon-brush" href="/Project">项目</el-link>
            </el-col>
            <el-col :span="3" class="vertical">
              <el-link icon="el-icon-chat-dot-round" href="/About" type="info">关于</el-link>
            </el-col>
          </el-row>
        </el-col>
        <!-- 自适应 -->
        <el-col :span="6" class="hidden-md-and-up">
          <!-- 添加按钮,点击弹出drawer -->
          <el-button @click="drawer = true" class="el-icon-s-fold movie_btn"></el-button>
        </el-col>
      </el-row>
      <el-drawer class="drawer" size="60%" title="菜单" :visible.sync="drawer" :with-header="false" :modal-append-to-body="false">
        <div class="navbar">
        <div class="navbar_head">
          <a class="navbar__brand">
            <img src="../assets/Avatar.jpg" alt="头像" class="navbar_logo" />
            <strong class="navbar__title">泽宇的前端小站</strong>
          </a>
        </div>
         <div class="navbar_main">
           <div class="navbar_menu">
             <ul class="menu_list">
               <li class="menu_list_item">
                 <a class="menu_link" href="/Welcome">首页</a>
               </li>
               <li class="menu_list_item">
                 <a class="menu_link" href="/Project">项目</a>
               </li>
               <li class="menu_list_item">
                 <a class="menu_link" href="/About">关于</a>
               </li>
             </ul>
           </div>
         </div>
        </div>
      </el-drawer>
    </el-header>
    <el-container>
      <el-aside width="33%" class="hidden-sm-and-down">
        <el-row>
          <el-col :span="24">
            <img class="tou_xiang" src="../assets/Avatar.jpg" alt="头像" />
          </el-col>
          <el-col :span="24">
            <h1 style="font-size: 32px;color: white;margin-bottom: 0;">孙泽宇</h1>
            <h1 style="font-size: 32px;color: white;margin-top: 0;">的个人网站</h1>
          </el-col>
          <el-col :span="24">
            <!-- 分割线 -->
            <el-divider></el-divider>
          </el-col>
          <el-row>
            <el-col :span="24">
              <div style="z-index:99;" id="weather-v2-plugin-standard"></div>
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
            <p style="text-align: center;color: white;">Hello World! || ©鲁ICP备:20006692号</p>
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
  mounted () {
    window.WIDGET = {
      CONFIG: {
        layout: 1,
        width: '400',
        height: '150',
        background: 1,
        dataColor: 'FFFFFF',
        borderRadius: 5,
        key: 'OuM69a2jlH'
      }
    }
  },
  methods: {
  }
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
  margin-right: .5rem;
}
.navbar_main {
  padding: .5rem;
}
.navbar_menu {
  text-decoration: none;
  font-weight:500;
  overflow-x: hidden;
}
.menu_list {
  list-style: none;
  margin: 0;
  padding-right: 0;
}
.menu_list_item {
  margin: .25rem 0;
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
  width:100%;
  height: 100%;
}
</style>
