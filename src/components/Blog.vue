<template>
  <div class="blog markdown-body" v-html="Blog_html"></div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      Blog_id: '',
      Blog_html: ''
    }
  },
  mounted () {
    this.getBlog()
  },
  methods: {
    getBlog () {
      this.Blog_id = this.$store.state.Blog_id
      this.$http.get('http://49.232.88.119:997/blog_html', { params: { Blog_id: this.Blog_id } },
        { emulateJSON: true })
        .then(geted => {
          this.Blog_html = geted.data[0].blog_html
        }).catch(err => {
          alert(err)
        })
    }
  }

}
</script>

<style scoped>
.blog {
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
</style>
