<template>
  <div class="bg">
    <!--    本体-->
    <div class="music_app">
      <!--      头部-->
      <div class="music_head">
        <el-row type="flex" :gutter="10" class="head_line" align="middle" justify="center">
          <!--          logo-->
          <el-col :span="2">
            <img src="../assets/music_logo.png" alt="" style="width: 75px;height: 50px">
          </el-col>
          <!--          文字-->
          <el-col :span="6">
            <span style="color: white">云村音乐，不负好时光</span>
          </el-col>
          <!--          搜索框-->
          <el-col :span="8" :offset="4">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="song_name">
            </el-input>
          </el-col>
          <!--          按钮-->
          <el-col :span="4">
            <el-tooltip class="item" effect="dark" content="默认只搜索前30条数据" placement="bottom">
              <el-button type="danger" @click="music_search_btn">搜索</el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
      <!--      主体-->
      <div class="music_maina">
        <el-row class="main_body">
          <el-col :span="8" class="left">
            <ul>
              <li :key="item.id" v-for="item in songs_array">
                <el-button
                  size="small"
                  circle @click="playMusic(item.id)"
                  icon="el-icon-caret-right" type="danger"
                  class="start_play">
                </el-button>
                <b>{{item.name}} - {{item.artists[0].name}}</b>
              </li>
            </ul>
          </el-col>
          <el-col :span="16" class="right">
            <img src="../assets/disc.png" alt="" class="disc autoRotate">
            <img :src="songs_img" alt="" class="cover autoRotate">
          </el-col>
        </el-row>
      </div>
      <!--      播放条-->
      <div class="music_progress">
        <!--    controls 显示控件；autoplay：加载完成后随即播放 loop：自动重播-->
        <audio :src="songs_url" class="audio" ref='audio' controls autoplay loop></audio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 双向数据绑定
      song_name: '',
      // 歌曲详情
      songs_array: '',
      // 歌曲url
      songs_url: '',
      // 歌曲封面
      songs_img: ''
    }
  },
  methods: {
    music_search_btn () {
      this.$http.get('http://musicapi.leanapp.cn/search?keywords=' + this.song_name)
        .then((complete) => {
          this.songs_array = complete.data.result.songs
          this.$message({
            message: '搜索成功！',
            type: 'success'
          })
        }, () => {
          this.$message.error('搜索失败！')
        })
    },
    playMusic (id) {
      // 给url传参
      this.songs_url = ' https://music.163.com/song/media/outer/url?id=' + id
      // 获得歌曲封面
      this.$http.get('https://autumnfish.cn/song/detail?ids=' + id)
        .then((complete) => {
          this.songs_img = complete.data.songs[0].al.picUrl
        })
    }
  }
}
window.onload = function () {
  const disc = document.querySelector('.disc')
  const cover = document.querySelector('.cover')
  const audio = document.querySelector('.audio')
  audio.addEventListener('play', function () {
    disc.style.animationPlayState = 'running'
    cover.style.animationPlayState = 'running'
  })
  audio.addEventListener('pause', function () {
    cover.style.animationPlayState = 'paused'
    disc.style.animationPlayState = 'paused'
  })
}
</script>

<style scoped>
  @media screen and (min-width:1200px)  {
  .music_app{
      transform: translate(-50%, -50%);
  }
}
  .bg {
    background: url("#") no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .music_app {
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #fff;
    width: 780px;
    height: 560px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .music_head {
    width: 100%;
    background-color: #6495ED;
    height: 10%;
  }

  .head_line {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .head_line el-button {
    box-sizing: border-box;
    margin-top: 10px;
  }

  /*自定义按钮颜色*/
  .el-button--danger {
    color: #fff;
    background-color: #F44336;
    border-color: #F44336;
  }

  .music_maina {
    width: 100%;
    height: 80%;
  }

  .main_body {
    width: 100%;
    height: 100%;
  }

  .left {
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid crimson;
  }

  .left ul {
    padding: 0 0 0 20px;
    list-style: none;
  }

  .left ul li {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .start_play {
    display: block;
    background-size: 100%;
    margin-right: 5px;
    box-sizing: border-box;
  }

  .left ul li b {
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }

  .right {
    height: 100%;
  }

  .disc {
    position: relative;
    left: 25%;
    top: 20%;
    z-index: 999;
  }

  .cover {
    position: relative;
    right: 15%;
    top: 10%;
    width: 160px;
    height: 160px;
  }

  .music_progress {
    height: 10%;
  }

  .audio {
    width: 100%;
  }

  /*动画效果*/
  @-webkit-keyframes Rotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  .autoRotate {
    animation-name: Rotate;
    animation-iteration-count: infinite;
    animation-play-state: paused;
    animation-timing-function: linear;
    animation-duration: 5s;
  }
</style>
