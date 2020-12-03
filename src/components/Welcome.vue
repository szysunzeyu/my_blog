<template>
  <main>
    <el-card class="blog_card" v-for="item in blog_list" :key="item.blog_id">
      <el-row>
        <el-col :span="24"><h1>{{ item.blog_title }}</h1></el-col>
        <el-col :span="6" :xs="{span:24}">时间: {{ item.blog_time }}</el-col>
        <el-col :span="6" :xs="{span:24}">作者: {{ item.blog_writer }}</el-col>
        <el-col :span="24" style="margin-top:20px"><el-button type="primary" @click="blog_check(item.blog_id)">查看</el-button></el-col>
      </el-row>
    </el-card>
    <!-- 翻页 -->
    <el-pagination
      style="text-align: center"
      background
      :pager-count="5"
      @current-change="currentChange"
      layout="prev, pager, next"
      @prev-click="pre_blog"
      @next-click="next_blog"
      :total="50">
    </el-pagination>
  </main>
</template>

<script>
export default {
  data () {
    return {
      blog_list: '',
      blog_page: ''
    }
  },
  mounted () {
    this.blog_item()
    if (this._isMobile()) {
      alert('建议使用PC端浏览，体验更佳')
    }
  },
  methods: {
    _isMobile () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    },
    blog_item () {
      this.$http.get('http://49.232.88.119:997/blog')
        .then(geted => {
          this.blog_list = geted.data
        }).catch(err => {
          console.log(err)
        })
    },
    // 点击页数
    currentChange (page) {
      this.blog_page = page
      this.$http.get('http://49.232.88.119:997/blog_page', { params: { blog_page: this.blog_page } },
        { emulateJSON: true })
        .then(geted => {
          this.blog_list = geted.data
        }).catch(err => {
          console.log(err)
        })
    },
    // 上一页
    pre_blog (page) {
      this.blog_page = page
      this.$http.get('http://49.232.88.119:997/blog_page', { params: { blog_page: this.blog_page } },
        { emulateJSON: true })
        .then(geted => {
          this.blog_list = geted.data
        }).catch(err => {
          console.log(err)
        })
    },
    // 下一页
    next_blog (page) {
      this.blog_page = page
      this.$http.get('http://49.232.88.119:997/blog_page', { params: { blog_page: this.blog_page } },
        { emulateJSON: true })
        .then(geted => {
          this.blog_list = geted.data
        }).catch(err => {
          console.log(err)
        })
    },
    blog_check (id) {
      this.$store.state.Blog_id = id
      this.$router.push('/Blog')
    }
  }
}
</script>

<style scoped>
.blog_card {
  box-sizing: border-box;
  margin: 3vh;
}
</style>
