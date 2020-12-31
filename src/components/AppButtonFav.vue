<template>
  <button>
    <font-awesome-icon
      :style="{ color: iconColor }"
      :icon="iconFav"
    ></font-awesome-icon>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    fav: Boolean
  },
  name: 'AppButtonFav',
  data() {
    return {}
  },
  computed: {
    iconFav: function() {
      return this.fav ? fasHeart : farHeart
    },
    iconColor: function() {
      return this.fav ? '#f44336' : ''
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
button {
  background: transparent;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
