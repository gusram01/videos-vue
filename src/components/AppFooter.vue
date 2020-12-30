<template>
  <footer class="footer">
    <span id="legend"> Gustavo Ramírez {{ legend }}<sup>©</sup> </span>
    <p>
      <a
        class="link"
        href="https://www.linkedin.com/in/gustavo-cesar-ramirez/"
        target="_blank"
      >
        <font-awesome-icon class="icon" :icon="linkedin" />
      </a>
      <a class="link" href="https://twitter.com/GusGusdev" target="_blank">
        <font-awesome-icon class="icon" :icon="twitter" />
      </a>
      <a class="link" href="https://github.com/gusram01" target="_blank">
        <font-awesome-icon class="icon" :icon="github" />
      </a>
      <span
        >Repo:
        <a class="link" href="#" target="_blank">
          API-Movies Info
        </a></span
      >
    </p>
    <p>
      Wallpaper from
      <a
        class="link"
        href="https://www.pexels.com/photo/black-and-white-labeled-box-3945313/"
        target="_blank"
        >Pexels®</a
      >
      by
      <a class="link" href="https://www.pexels.com/@cottonbro" target="_blank"
        >cottonbro</a
      >
    </p>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AppFooter',
  data() {
    return {
      twitter: faTwitter,
      github: faGithub,
      linkedin: faLinkedin
    }
  },
  computed: {
    legend: () => {
      return new Date().getFullYear()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped></style>
