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
          id="username"
          :class="{ error: errors.username }"
        />
        <label
          for="username"
          :class="{ 'label-active': usernameNotEmpty, error: errors.username }"
          >Username</label
        >
        <p class="item__error error" v-if="errors.username">
          {{ errors.username }}
        </p>
      </div>
      <div class="form__item">
        <input
          :type="typePass ? 'password' : 'text'"
          v-model="password"
          id="password"
          :class="{ error: errors.password }"
        />
        <label
          for="password"
          :class="{ 'label-active': passwordNotEmpty, error: errors.password }"
          >Password</label
        >
        <font-awesome-icon
          class="form__icon"
          @click="showPassword"
          :icon="!typePass ? showPass : hidePass"
        ></font-awesome-icon>
        <p class="item__error error" v-if="errors.password">
          {{ errors.password }}
        </p>
      </div>
      <button class="button-primary button-block bshadow-2">Login</button>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { login } from '@/services'

export default {
  name: 'AppLogin',
  data() {
    return {
      errors: {},
      username: null,
      password: null,
      showPass: faEye,
      hidePass: faEyeSlash,
      typePass: true
    }
  },
  computed: {
    usernameNotEmpty: function() {
      return this.username && this.username.length > 0
    },
    passwordNotEmpty: function() {
      return this.password && this.password.length > 0
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
    },
    showPassword() {
      this.typePass = !this.typePass
    }
  },
  components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>
h1,
h2 {
  margin: 0;
}
.form__container {
  min-width: 280px;
  max-width: 400px;
  width: 50%;
  min-height: 300px;
  height: fit-content;
  padding: 1rem 1.5rem;
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
}
.form__header,
.form__item {
  font-size: 1rem;
  line-height: 1.5rem;
}
.form__header {
  padding: 0 0.5rem 1rem;
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
  height: 5rem;
  margin: 0.2rem 0;
}
input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  padding: 1.5rem 0.7rem 0.5rem;
  border-radius: 5px 5px 0 0;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 16) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: currentColor;
}
input.error {
  border-bottom: 2px solid
    hsla(
      var(--hue-danger),
      calc(var(--sat-danger) * 1%),
      calc(var(--lumin-danger) * 1%),
      calc(var(--alpha-danger) * 1%)
    );
}
input + label {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  opacity: 0.65;
  font-size: 0.9rem;
  transform: translate(0) scale(1);
  user-select: none;
}
input:focus-within + label {
  transform: translateY(-50%) translateX(-14%) scale(0.75);
  transition: transform 150ms ease-in, opacity 50ms linear;
}

.label-active {
  transform: translateY(-50%) translateX(-14%) scale(0.75);
  transition: transform 150ms ease-in, opacity 50ms linear;
}

.item__error {
  font-size: 0.7em;
  line-height: 0.3em;
  font-stretch: semi-condensed;
}
.form__icon {
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  cursor: pointer;
}
</style>
