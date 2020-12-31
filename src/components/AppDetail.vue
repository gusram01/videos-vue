<template>
  <article class="card">
    <img src="" alt="" />
    <span class="card__avg">{{ movie.vote_average }}</span>
    <div class="card__content">
      <h1>{{ movie.title }}</h1>
      <p class="card__text">
        {{ movie.overview }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['movie'],
  name: 'AppDetail'
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  height: 100%;
  margin: 0.5rem 0;
  padding: 40% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  overflow: hidden;
}
.card__content {
  width: 100%;
  min-height: 50%;
  background: hsla(0, 0%, 0%, 75%);
  color: hsla(0, 0%, 90%, 80%);
  padding: 0.5rem 1rem;
  text-align: justify;
}
.card__avg {
  position: absolute;
  top: 3%;
  left: 3%;
}
</style>
