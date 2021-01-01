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
@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), url(/fonts/Ubuntu-Regular.ttf) format('truetype');
}
:root {
  --hue-dark: 240;
  --sat-dark: 7;
  --lumin-dark: 12;
  --alpha-dark: 100;

  --hue-primary-dark: 67;
  --sat-primary-dark: 100;
  --lumin-primary-dark: 68;
  --alpha-primary-dark: 100;

  --hue-secondary-dark: 31;
  --sat-secondary-dark: 100;
  --lumin-secondary-dark: 68;
  --alpha-danger-dark: 100;

  --hue-danger-dark: 359;
  --sat-danger-dark: 92;
  --lumin-danger-dark: 68;
  --alpha-danger-dark: 100;

  --hue-light: 240;
  --sat-light: 2;
  --lumin-light: 88;
  --alpha-light: 100;

  --hue-primary-light: 223;
  --sat-primary-light: 95;
  --lumin-primary-light: 57;
  --alpha-primary-light: 100;

  --hue-secondary-light: 223;
  --sat-secondary-light: 95;
  --lumin-secondary-light: 57;
  --alpha-secondary-light: 100;

  --hue-danger-light: 357;
  --sat-danger-light: 78;
  --lumin-danger-light: 42;
  --alpha-danger-light: 100;

  --hue: var(--hue-dark);
  --sat: var(--sat-dark);
  --lumin: var(--lumin-dark);
  --alpha: var(--alpha-dark);

  --hue-primary: var(--hue-primary-dark);
  --sat-primary: var(--sat-primary-dark);
  --lumin-primary: var(--lumin-primary-dark);
  --alpha-primary: var(--alpha-primary-dark);

  --hue-secondary: var(--hue-secondary-dark);
  --sat-secondary: var(--sat-secondary-dark);
  --lumin-secondary: var(--lumin-secondary-dark);
  --alpha-secondary: var(--alpha-secondary-dark);

  --hue-danger: var(--hue-danger-dark);
  --sat-danger: var(--sat-danger-dark);
  --lumin-danger: var(--lumin-danger-dark);
  --alpha-danger: var(--alpha-danger-dark);
}
* {
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
body {
  margin: 0;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc(var(--lumin) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((100 - var(--lumin)) * 1%),
    calc(var(--alpha) * 1%)
  );
  font-family: 'Ubuntu', sans-serif;
}

a,
a:visited,
a:link {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: inherit;
  max-width: 1368px;
}

.icon {
  font-size: 1.3rem;
  margin: 0 0.3rem;
  color: hsl(
    var(--hue-primary),
    calc(var(--sat-primary) * 1%),
    calc(var(--lumin-primary) * 1%)
  );
}
.separator {
  flex: 1 1 auto;
}
.button-block {
  width: 100%;
}
.button-primary {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  line-height: 1.3rem;
  border-radius: 4px;
  background: hsla(
    var(--hue-primary),
    calc(var(--sat-primary) * 1%),
    calc(var(--lumin-primary) * 1%),
    calc(var(--alpha-primary) * 1%)
  );
  color: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc(var(--lumin) * 1%),
    calc(var(--alpha) * 1%)
  );
}
.shadow-1 {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.shadow-2 {
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2);
}
.shadow-3 {
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);
}
.bshadow-2 {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}
.error {
  color: hsla(
    var(--hue-danger),
    calc(var(--sat-danger) * 1%),
    calc(var(--lumin-danger) * 1%),
    calc(var(--alpha-danger) * 1%)
  );
}
</style>
