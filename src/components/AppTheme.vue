<template>
  <button @click="changeTheme" :class="{ yellow: !isDark }">
    <font-awesome-icon :icon="iconTheme"></font-awesome-icon>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'AppTheme',
  data() {
    return {
      moon: faMoon,
      sun: faSun,
      isDark: true
    }
  },
  created() {
    this.getTheme()
  },
  computed: {
    iconTheme: function() {
      return !this.isDark ? this.sun : this.moon
    }
  },
  methods: {
    setTheme() {
      const styles = document.documentElement.style
      const theme = this.isDark ? 'dark' : 'light'
      styles.setProperty('--hue', `var(--hue-${theme})`)
      styles.setProperty('--sat', `var(--sat-${theme})`)
      styles.setProperty('--lumin', `var(--lumin-${theme})`)
      styles.setProperty('--alpha', `var(--alpha-${theme})`)

      styles.setProperty('--hue-primary', `var(--hue-primary-${theme})`)
      styles.setProperty('--sat-primary', `var(--sat-primary-${theme})`)
      styles.setProperty('--lumin-primary', `var(--lumin-primary-${theme})`)
      styles.setProperty('--alpha-primary', `var(--alpha-primary-${theme})`)

      styles.setProperty('--hue-secondary', `var(--hue-secondary-${theme})`)
      styles.setProperty('--sat-secondary', `var(--sat-secondary-${theme})`)
      styles.setProperty('--lumin-secondary', `var(--lumin-secondary-${theme})`)
      styles.setProperty('--alpha-secondary', `var(--alpha-secondary-${theme})`)

      styles.setProperty('--hue-danger', `var(--hue-danger-${theme})`)
      styles.setProperty('--sat-danger', `var(--sat-danger-${theme})`)
      styles.setProperty('--lumin-danger', `var(--lumin-danger-${theme})`)
      styles.setProperty('--alpha-danger', `var(--alpha-danger-${theme})`)

      return localStorage.setItem('Vu3Th3mE', theme)
    },
    getTheme() {
      const theme = localStorage.getItem('Vu3Th3mE')
      if (!theme) {
        this.isDark = true
        this.setTheme()
        return
      }
      theme === 'dark' ? (this.isDark = true) : (this.isDark = false)
      this.setTheme()
    },
    changeTheme() {
      this.isDark = !this.isDark
      this.setTheme()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  color: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((100 - var(--lumin)) * 1%),
    calc(var(--alpha) * 1%)
  );
  font-size: 1.2rem;
  padding: 0.5rem;
}
.yellow {
  --hue: 47;
  --sat: 80;
  --lumin: 60;
}
</style>
