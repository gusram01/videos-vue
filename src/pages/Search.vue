<template>
  <div class="search">
    <h1>search</h1>
    <app-search @title="search" @clear="clearScreen" />
    <div class="card-container" v-if="movies">
      <app-card v-for="movie in movies" v-bind="movie" v-bind:key="movie.id" />
    </div>
  </div>
</template>

<script>
import AppSearch from '../components/AppSearch.vue'
import { find } from '@/services'
import AppCard from '../components/AppCard.vue'

export default {
  name: 'Search',
  data() {
    return {
      movies: null
    }
  },
  methods: {
    search(title) {
      find(title)
        .then(data => (this.movies = data.data.results))
        .catch(err => {
          console.error(err)
          return []
        })
    },
    clearScreen() {
      this.movies = null
    }
  },
  components: { AppSearch, AppCard }
}
</script>
