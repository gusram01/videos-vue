<template>
  <div class="form__container shadow-1">
    <app-card v-bind:movie="movie" @movie="login">
      Log in to find your favorit movie info...
    </app-card>
    <div v-if="!$auth.loading">
      <button
        class="button-primary button-block bshadow-2"
        v-if="!$auth.isAuthenticated"
        @click="login"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue'

export default {
  name: 'AppLogin',
  data() {
    return {
      movie: {
        backdrop_path: '7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
        id: '7c185b5e',
        original_language: String,
        overview: 'After the devastating events of Avengers: Infinity',
        title: 'Avengers: Endgame',
        vote_average: 8.3
      }
    }
  },

  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect({
        appState: { targetUrl: '/search' }
      })
    }
  },
  components: { AppCard }
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
