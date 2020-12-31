<template>
  <div class="modal" :class="{ show: show }" @click="hide" id="modal">
    <app-detail :movie="movie" />
  </div>
</template>

<script>
import AppDetail from './AppDetail.vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    picked: {
      backdrop_path: String,
      id: Number,
      original_language: String,
      original_title: String,
      overview: String,
      poster_path: String,
      release_date: String,
      title: String,
      video: Boolean,
      vote_average: Number,
      vote_count: Number
    }
  },
  name: 'AppModal',
  computed: {
    movie() {
      return this.picked
    }
  },
  methods: {
    hide(e) {
      if (e.target.id === 'modal') {
        this.$emit('close')
      }
    }
  },
  components: { AppDetail }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto 0;
  background: hsla(0, 0%, 0%, 75%);
  transform: scale(0);
  z-index: 99000;
}
.show {
  transform: scale(1);
  transition: transform 150ms ease-in;
}
</style>
