<template>
  <div id="main">
    <mavonEditor :value="value" />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data () {
    return {
      value: ''
    }
  }

}
</script>

<style>

</style>
