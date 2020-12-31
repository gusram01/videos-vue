<template>
  <div class="favs" v-if="movies">
    <header>
      <button @click="back">
        <font-awesome-icon :icon="left"></font-awesome-icon>
        Back
      </button>
      <span class="separator"></span>
      <h1>Favorites</h1>
    </header>
    <section class="favs__details"></section>
    <app-detail
      @change="onChange"
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
    />
  </div>
</template>

<script>
import AppDetail from '@/components/AppDetail.vue'
import { actualUser } from '@/services'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Favs',
  data() {
    return {
      movies: null,
      left: faChevronLeft
    }
  },
  created() {
    this.onChange()
  },

  methods: {
    onChange() {
      const data = actualUser()
      if (data.movies.length < 1) {
        this.$router.replace('/search')
        return
      }
      this.movies = data.movies
    },
    back() {
      this.$router.go(-1)
    }
  },
  components: { AppDetail, FontAwesomeIcon }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  min-height: 40px;
  height: 5vh;
  width: 90%;
  margin: 0 auto;
}
h1 {
  margin: 0;
  padding: 0;
}
.favs {
  min-height: 75vh;
  width: 100%;
}
.favs__details {
  padding: 2rem 0;
}
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-width: 75px;
  font-size: 1rem;
  background: transparent;
  border: none;
  outline: none;
}
</style>
