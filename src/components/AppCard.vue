<template>
  <article class="card" :style="{ backgroundImage: image }">
    <span class="card__avg">{{ movie.vote_average }}</span>
    <div class="card__content">
      <h1>{{ movie.title }}</h1>
      <p class="card__text">
        {{ abstract }}
      </p>
      <button @click="myMovie">More details...</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    movie: {
      backdrop_path: String,
      id: Number,
      original_language: String,
      overview: String,
      title: String,
      vote_average: Number
    }
  },

  name: 'AppCard',
  computed: {
    image: function() {
      return !this.movie.backdrop_path
        ? '/assets/no-image.jpg'
        : `url(https://image.tmdb.org/t/p/w500/${this.movie.backdrop_path})`
    },
    abstract: function() {
      return this.movie.overview.slice(0, 50)
    }
  },
  methods: {
    myMovie() {
      this.$emit('movie', this.movie)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
}
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
  break-inside: avoid;
}
.card__content {
  width: 100%;
  min-height: 50%;
  background: hsla(0, 0%, 0%, 75%);
  color: hsla(0, 0%, 90%, 80%);
  padding: 0.5rem 1rem;
  opacity: 0;
  text-align: justify;
}
.card:hover .card__content {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
.card__avg {
  position: absolute;
  top: 3%;
  left: 3%;
}
</style>
