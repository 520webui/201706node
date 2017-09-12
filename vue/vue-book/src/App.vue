<template>
  <div id="app">
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './base/Navbar.vue'
export default {
  name: 'app',
  components:{
      Navbar
  }
}
</script>
<style lang="stylus">
  *
    margin 0
    padding 0
    body,html
      width 100%
      height 100%
      overflow hidden
  ul,li
    list-style none
  a
    text-decoration none
    color #ccc
</style>
