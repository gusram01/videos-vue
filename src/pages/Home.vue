<template>
  <div class="home">
    <app-login />
  </div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue'
export default {
  name: 'Home',
  created() {
    if (this.$auth.isAuthenticated) {
      console.log(this.$auth.isAuthenticated)
      this.$router.replace('/search')
    }
  },
  components: { AppLogin }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 87vh;
  padding-top: 4rem;
}
</style>
