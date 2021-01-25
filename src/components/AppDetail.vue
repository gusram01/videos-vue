<template>
  <article class="card" :class="{ 'modal-mode': modalMode }">
    <button
      class="button-flat"
      @click="closeDetail"
      id="close"
      v-if="modalMode"
    >
      <font-awesome-icon class="icon" :icon="close"></font-awesome-icon>
    </button>
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
        Overview: <br />
        {{ movie.overview }}
      </p>
      <p v-if="cast" class="card__cast">
        <small>
          Casting: <br />
          {{ castNames }}
        </small>
      </p>
    </div>
  </article>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
      cast: null,
      close: faTimes,
      actualPath: null
    }
  },
  created() {
    this.actualPath = this.$router.history.current.name
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
    isFav(this.movie, this.$auth.user.email).then(([fav]) => (this.fav = fav))
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
    },
    modalMode() {
      return !(this.actualPath && this.actualPath === 'favorites')
    }
  },

  methods: {
    onClickFav() {
      this.fav = !this.fav
      changeFav(this.movie, this.$auth.user.email).then(flag => {
        if (flag) {
          this.$emit('change')
        }
      })
    },
    closeDetail() {
      this.$emit('closeDetail')
    }
  },
  components: { AppButtonFav, FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>
h1,
p {
  margin: 0;
  padding: 0 0.8rem 0.6em;
}
.card {
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc(var(--lumin) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: currentColor;
}
.modal-mode {
  height: 400px;
  margin: 0 auto;
  overflow-y: auto;
}
.card__header,
.card__image {
  position: relative;
  width: 92%;
}
.card__image {
}

img {
  max-width: 100%;
}

.card__header {
  display: grid;
  grid-template-columns: auto 4fr;
  grid-template-areas:
    'a b'
    'a c';
  width: 100%;
}

.card__title {
  grid-area: b;
}
.card__subtitle {
  grid-area: c;
}
.card__avatar {
  display: flex;
  align-items: center;
  grid-area: a;
}
.card__content {
  position: relative;
  width: 100%;
  margin-top: 1em;
  padding: 0.5rem;
  text-align: justify;
  line-height: 1.8rem;
  border-radius: 4px;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 5) * 1%),
    calc(var(--alpha) * 1%)
  );
}
.card__cast {
  line-height: 1rem;
  opacity: 0.8;
}
.button-flat {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2000;
}
.icon {
  pointer-events: none;
}
</style>
