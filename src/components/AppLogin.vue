<template>
  <div class="form__container">
    <form class="form" id="login" @submit="onSubmit">
      <div class="form__item">
        <input
          type="text"
          v-model="username"
          placeholder="username"
          id="username"
        />
        <label for="username">Username</label>
        <p class="item__error" v-if="errors.username">
          {{ errors.username }}
        </p>
      </div>
      <div class="form__item">
        <input
          type="password"
          v-model="password"
          placeholder="password"
          id="password"
        />
        <label for="username">Password</label>
        <p class="item__error" v-if="errors.password">
          {{ errors.password }}
        </p>
      </div>
      <div class="form__item">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/services'

export default {
  components: {},
  name: 'AppLogin',
  data() {
    return {
      errors: {},
      username: null,
      password: null
    }
  },
  methods: {
    validateInputs() {
      this.errors = {}

      if (!this.username) {
        this.errors.username = 'Username is required'
      }
      if (!this.password) {
        this.errors.password = 'Password is required'
      }
    },

    onSubmit(e) {
      e.preventDefault()
      this.validateInputs()
      if (this.errors.username || this.errors.password) {
        console.log(this.errors)
        return
      }
      const newUser = {
        username: this.username,
        password: this.password
      }
      login(newUser)
      this.$router.replace('/search')
    }
  }
}
</script>

<style lang="scss" scoped></style>
