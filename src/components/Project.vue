<template>
  <div class="project">
    <el-row>
      <el-col
        :span="8"
        :xs="{span:24}"
        v-for="item in project"
        :key="item.id">
        <el-card :body-style="{ padding: '0px' }" class="project_card" shadow="hover">
          <div class="scale-img">
            <img :src="item.src" class="image"/>
          </div>
          <div style="padding: 14px;text-align:center;">
            <span>{{ item.name }}</span>
            <div class="bottom clearfix">
              <p class="time">{{ item.time }}</p>
              <el-button type="primary" round class="button" @click="check(item)">查看</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicUrl: 'http://music.sunzeyu.xyz',
      project: [
        { id: 1, name: '仿网易云音乐', time: '2020-5-19', router: 'Music', src: 'http://free-cn-01.cdn.bilnn.com/ddimg/jfs/t1/135904/15/12097/13727/5f82b4a1E3cb74c40/d886054debc6f6df.jpg' },
        { id: 2, name: '注册界面', time: '2020-11-24', router: 'Register', src: 'https://some-1258503478.cos.ap-beijing.myqcloud.com/img/register_logo.jpg' },
        { id: 3, name: '广告跳转页面', time: '2020-11-25', router: 'ADjump', src: 'https://icon.qiantucdn.com/20201114/0a859b0726b42740853e298cb2abad812' }
      ]
    }
  },
  methods: {
    check (item) {
      var name = item.router
      if (item.id === 1) {
        window.location.href = this.musicUrl
      } else {
        this.$router.push('/' + name)
      }
    }
  }
}
</script>

<style scoped>
.project_card {
  box-sizing: border-box;
  margin:20px;
}
.image {
  width: 100%;
  height: 225px;
  display: block;
  transition: transform 0.5s;
}
.image :hover {
    transform: scale(1.1);
}
.scale-img{overflow: hidden;}
.scale-img img{
    width: 100%;
    -webkit-object-fit: cover;
    object-fit: cover;
    transition: .5s all linear;
    -ms-transition: .5s all linear; /* IE 9 */
    -moz-transition: .5s all linear; /* Firefox */
    -webkit-transition: .5s all linear; /* Safari 和 Chrome */
    -o-transition: .5s all linear; /* Opera */
}
.scale-img:hover img{
    transform: scale3d(1.1,1.1,1.1);
    -ms-transform: scale3d(1.1,1.1,1.1);
    -moz-transform: scale3d(1.1,1.1,1.1);
    -webkit-transform: scale3d(1.1,1.1,1.1);
    -o-transform: scale3d(1.1,1.1,1.1);
}
</style>
