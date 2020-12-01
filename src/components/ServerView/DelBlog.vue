<template>
  <div>
    <el-card
      class="delBlog"
      v-for="item in blog_list"
      :key="item.blog_id"
    >
      <el-row>
        <el-col :span="12">
          <p>{{item.blog_title}}</p>
        </el-col>
        <el-col :span="12">
          <el-button
            type="danger"
            @click="dialogVisible = true"
          >删除这篇文章</el-button>
        </el-col>
        <el-dialog
          title="警告"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          center
        >
          <span>确认要删除吗？</span>
          <span
            slot="footer"
            class="dialog-footer"
          >
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="delBlog(item.blog_id)"
            >确 定</el-button>
          </span>
        </el-dialog>
      </el-row>
    </el-card>
    <el-pagination
      style="text-align: center"
      background
      :pager-count="5"
      @current-change="currentChange"
      layout="prev, pager, next"
      @prev-click="pre_blog"
      @next-click="next_blog"
      :total="50"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      blog_list: '',
      blog_page: '',
      blog_id: ''
    }
  },
  mounted () {
    this.blog_item()
  },
  methods: {
    blog_item () {
      this.$http
        .get('http://49.232.88.119:997/blog')
        .then(geted => {
          this.blog_list = geted.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    currentChange (page) {
      this.blog_page = page
      this.$http
        .get(
          'http://49.232.88.119:997/blog_page',
          { params: { blog_page: this.blog_page } },
          { emulateJSON: true }
        )
        .then(geted => {
          this.blog_list = geted.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    pre_blog (page) {
      this.blog_page = page
      this.$http
        .get(
          'http://49.232.88.119:997/blog_page',
          { params: { blog_page: this.blog_page } },
          { emulateJSON: true }
        )
        .then(geted => {
          this.blog_list = geted.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 下一页
    next_blog (page) {
      this.blog_page = page
      this.$http
        .get(
          'http://49.232.88.119:997/blog_page',
          { params: { blog_page: this.blog_page } },
          { emulateJSON: true }
        )
        .then(geted => {
          this.blog_list = geted.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    delBlog (id) {
      this.dialogVisible = false
      this.blog_id = id
      console.log(id)
      this.$http
        .get(
          'http://49.232.88.119:997/blog_del',
          { params: { blog_id: this.blog_id } },
          { emulateJSON: true }
        )
        .then(geted => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          setTimeout(() => {
            location.reload()
          }, 1500)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.delBlog {
  box-sizing: border-box;
  margin: 50px;
}
</style>
