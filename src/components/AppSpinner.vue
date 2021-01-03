<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'AppSpinner'
}
</script>

<style lang="scss" scoped>
.spinner {
  width: 100px;
  height: 100px;
  margin: 3rem auto;
  text-align: center;
  background: transparent;
  border-radius: 50%;
  border: 10px solid
    hsl(var(--hue), calc(var(--sat) * 1%), calc((var(--lumin) + 15) * 1%));
  border-left: 10px solid
    hsl(
      var(--hue-primary),
      calc(var(--sat-primary) * 1%),
      calc(var(--lumin-primary) * 1%)
    );
  animation: 1200ms linear infinite spin;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
