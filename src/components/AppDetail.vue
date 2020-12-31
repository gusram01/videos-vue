<template>
  <article class="card">
    <div class="card__header">
      <h1 class="card__title">{{ movie.title }}</h1>
      <p class="card__subtitle">
        {{ movie.release_date }}
      </p>
      <span class="card__avatar" @click="onClickFav">
        <app-button-fav :fav="fav" />
      </span>
    </div>

    <div class="card__img">
      <img :src="image" :alt="movie.original_title" />
    </div>

    <div class="card__content">
      <span class="card__avg">{{ movie.vote_average }}</span>
      <p class="card__text">
        {{ movie.overview }}
      </p>
      <p v-if="cast">
        {{ castNames }}
      </p>
    </div>
  </article>
</template>

<script>
import AppButtonFav from './AppButtonFav.vue'
import { findCast, isFav, changeFav } from '@/services'

export default {
  name: 'AppDetail',
  props: {
    movie: {
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
  data() {
    return {
      fav: false,
      cast: null
    }
  },
  created() {
    findCast(this.movie.id.toString())
      .then(
        data =>
          (this.cast = data.data.cast.map(item => ({
            name: item.name,
            img: item.profile_path
          })))
      )
      .catch(err => {
        console.error(err)
        this.cast = null
      })
    const [fav] = isFav(this.movie)
    this.fav = fav
  },
  destroyed() {
    this.cast = null
  },
  computed: {
    image: function() {
      return !this.movie.poster_path
        ? '/assets/no-image.jpg'
        : `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    },
    castNames() {
      return this.cast && this.cast.map(item => item.name).join(', ')
    }
  },

  methods: {
    onClickFav() {
      this.fav = !this.fav
      changeFav(this.movie)
      this.$emit('change')
    }
  },
  components: { AppButtonFav }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 300px;
  width: 50vw;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 6px;
  overflow-y: auto;
  background: hsla(0, 0%, 35%, 100%);
}
.card__header,
.card__image,
.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  text-align: center;
}

img {
  max-width: 100%;
}
</style>
