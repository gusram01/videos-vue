<template>
  <div
    class="modal"
    :class="{ show: show }"
    @closeDetail="hide"
    @click="hide"
    id="modal"
  >
    <app-detail v-if="picked" :movie="picked" />
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
    picked: Object
  },
  name: 'AppModal',

  methods: {
    hide(e) {
      if (['modal', 'close'].includes(e.target.id)) {
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
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 75%);
  transform: scale(0);
  z-index: 99000;
}
.show {
  transform: scale(1);
  transition: transform 150ms ease-in;
}
</style>
