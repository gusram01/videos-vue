<template>
  <div class="">
    <router-view />
    <app-footer />
    <app-navbar />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: { AppNavbar, AppFooter }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
body {
  margin: 0;
}

a,
a:visited,
a:link {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
