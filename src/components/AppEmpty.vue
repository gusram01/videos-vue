<template>
  <div class="empty" :class="{ show: showModal }" @click="hide">
    <h1>Empty Favs</h1>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  name: 'AppEmpty',
  methods: {
    hide() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.empty {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: hsla(0, 0%, 0%, 75%);
  transform: scale(0);
  z-index: 90000;
}
.show {
  transform: scale(1);
  transition: transform 200ms ease-in;
}
h1 {
  width: 75%;
  color: hsla(0, 0%, 90%, 85%);
  background: hsla(0, 0%, 30%, 75%);
  text-align: center;
  padding: 3rem 0.5rem;
}
</style>
