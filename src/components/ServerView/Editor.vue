<template>
  <div class="newBlog">
    <mavonEditor :value="value" :ishljs = "true" @change="getnewBlog" />
    <el-card class="newBlogCard">
      <div class="newBlogdiv">
        <el-input v-model="newBlogtitle" placeholder="请输入标题" class="newBloginput" clearable></el-input>
        <el-input v-model="newBlogpage" placeholder="请输入页数" class="newBloginput" clearable></el-input>
        <el-input v-model="newBlogname" placeholder="请输入作者" class="newBloginput" clearable></el-input>
      </div>
      <div class="newBlogdiv">
        <el-button type="primary" round class="newBlogbtn" @click="sendNewBlog">发布博客</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data () {
    return {
      value: '',
      newBlogtitle: '',
      newBlogpage: '',
      newBlogname: '',
      newBloghtml: '',
      newBlogdate: ''
    }
  },
  mounted () {
    this.getToday()
  },
  methods: {
    getToday () {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      this.newBlogdate = year + '-' + month + '-' + day
    },
    getnewBlog (text, render) {
      console.log(render)
      this.newBloghtml = render
    },
    sendNewBlog () {
      this.$http.get('http://49.232.88.119:997/newBlog', { params: { newBlogtitle: this.newBlogtitle, newBlogpage: this.newBlogpage, newBlogname: this.newBlogname, newBloghtml: this.newBloghtml, newBlogdate: this.newBlogdate } })
        .then(res => {
          this.$message({
            message: '发布成功！',
            type: 'success'
          })
        }).catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style scoped>
.newBlog {
  box-sizing: border-box;
  margin-top: 30px;
}
.newBlogCard {
  box-sizing: border-box;
  padding: 30px;
}
.newBlogdiv {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.newBloginput {
  width: 250px;
  box-sizing: border-box;
  margin-left: 10px;
}
.newBlogbtn {
  margin: 0px;
}
</style>
