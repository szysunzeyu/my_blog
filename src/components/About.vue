<template>
  <div>
    <el-row class="frist_show">
      <div class="overlay"></div>
      <!--头像-->
      <el-row>
        <el-col :span="24">
          <div class="head_img_div">
            <img
              class="head_img"
              src="../assets/head_pic.png"
              alt="孙泽宇的博客"
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="head_text">
            <h1>你好，我是孙泽宇</h1>
            <p>
              这是我的个人网站，我会在这里写一写在学习开发过程中遇到的问题和解决方案，或者其他的随笔
            </p>
            <p>
              也许未来会有那一天<br />
              当你闭上双眼 恍然又回到了 那段华年<br />
              那时梦仍遥远你我仍少年<br />
              以为踮踮脚就能触到天
            </p>
          </div>
          <h1 class="head_text">技术支持:</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :span="6"
          :xs="{span:24}"
          v-for="links in link"
          :key="links.id"
        >
          <el-card class="links_card">
            <img
              :src="links.img"
              class="links_image"
            />
            <p>{{ links.name }}</p>
            <p>{{ links.title }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      link: [
        {
          id: 1,
          img: 'https://some-1258503478.cos.ap-beijing.myqcloud.com/img/bt.png',
          name: '宝塔面板',
          title: '简单好用的服务器运维面板。'
        },
        {
          id: 2,
          img:
            'https://some-1258503478.cos.ap-beijing.myqcloud.com/img/ele.png',
          name: 'Element-Ui',
          title: '基于 Vue 2.0 的桌面端组件库。'
        },
        {
          id: 3,
          img:
            'https://some-1258503478.cos.ap-beijing.myqcloud.com/img/txy.png',
          name: '腾讯云',
          title: '腾讯云—腾讯倾力打造的云计算品牌。'
        },
        {
          id: 4,
          img:
            'https://some-1258503478.cos.ap-beijing.myqcloud.com/img/vue.png',
          name: 'Vue.Js',
          title: '构建用户界面的渐进式框架。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.frist_show {
  background-image: url("../assets/bg_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.overlay {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background: #fff;
  z-index: 0;
}
.head_img_div {
  margin: 65px auto;
}
.head_img {
  border-radius: 50%;
  height: 180px;
  margin: 0 auto;
  display: block;
}
.head_text {
  text-align: center;
}
.links_card {
  margin: 5%;
  text-align: center;
}
.links_image {
  widows: 64px;
  height: 64px;

}
</style>
