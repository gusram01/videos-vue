<template>
  <div class="home">
    <h1>home</h1>
    <app-login />
  </div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue'
export default {
  name: 'Home',
  components: { AppLogin }
}
</script>
<style lang="scss" scoped></style>
