<template>
  <footer class="footer">
    <span id="legend"> Gus Ramírez {{ legend }}<sup>©</sup> </span>
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
    </p>
    <p>
      <small>
        Repo:
      </small>
      <a
        class="link"
        href="https://github.com/gusram01/videos-vue"
        target="_blank"
      >
        Vue-videos
      </a>
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

<style lang="scss" scoped>
.footer {
  padding-bottom: 5rem;
  text-align: center;
}
small {
  margin-right: 1rem;
}
</style>
