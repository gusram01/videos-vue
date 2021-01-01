<template>
  <nav>
    <app-theme />
    <ul>
      <li>
        <router-link class="link" to="/">
          Main
        </router-link>
      </li>
      <li>
        <a class="link" href="https://gusramirez.dev/portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <a class="link" href="https://gusramirez.dev/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppTheme from '@/components/AppTheme'
export default {
  name: 'NavBar',
  components: { AppTheme }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  min-height: 60px;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) - 5) * 1%),
    calc(var(--alpha) * 1%)
  );
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
}
li {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.link {
  color: currentColor;
}
</style>
