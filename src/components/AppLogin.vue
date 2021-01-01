<template>
  <div class="form__container shadow-1">
    <form class="form" id="login" @submit="onSubmit">
      <div class="form__header">
        <h1>Your App Account</h1>
        <h2>Login</h2>
      </div>
      <div class="form__item">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          id="username"
        />
        <label for="username">Username</label>
        <p class="item__error error" v-if="errors.username">
          {{ errors.username }}
        </p>
      </div>
      <div class="form__item">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          id="password"
        />
        <label for="username">Password</label>
        <p class="item__error error" v-if="errors.password">
          {{ errors.password }}
        </p>
      </div>
      <div class="form__item">
        <button class="button-primary button-block bshadow-2">Login</button>
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

<style lang="scss" scoped>
h1,
h2 {
  margin: 0;
}
.form__container {
  min-width: 280px;
  max-width: 500px;
  width: 50%;
  min-height: 300px;
  height: 40vh;
  padding: 3%;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 7) * 1%),
    calc(var(--alpha) * 1%)
  );
  border-radius: 6px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.form__header,
.form__item {
  font-size: 1rem;
  line-height: 1.5rem;
}
.form__header {
  padding: 0 0.5rem 0.5rem;
}
h1 {
  font-size: 1.3em;
  font-weight: 600;
}
h2 {
  font-size: 1em;
  font-weight: 500;
  opacity: 0.8;
}
.form__item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.5rem;
  margin: 0.2rem 0;
}
.form__item > input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  padding: 1rem 0.7rem;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 16) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: currentColor;
}

input + label {
  position: absolute;
  top: 17%;
  left: 5%;
  opacity: 1;
  font-size: 0.9rem;
  transform: translate(0) scale(1);
}
input:focus-within + label,
input:enabled + label {
  transform: translateY(-50%) translateX(-10%) scale(0.8);
  opacity: 1;
  transition: transform 150ms ease-in, opacity 50ms linear;
}

.item__error {
  font-size: 0.7em;
  line-height: 0.3em;
  font-stretch: semi-condensed;
}
</style>
