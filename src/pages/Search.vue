<template>
  <div class="search">
    <app-modal
      v-if="picked"
      :show="show"
      v-bind:picked="picked"
      @close="hideModal"
    />
    <h1>search</h1>
    <app-search @title="search" @clear="clearScreen" />
    <div class="card-container" v-if="movies" @click="showModal">
      <app-card v-for="movie in movies" v-bind="movie" v-bind:key="movie.id" />
    </div>
  </div>
</template>

<script>
import { find } from '@/services'
import AppSearch from '@/components/AppSearch.vue'
import AppCard from '@/components/AppCard.vue'
import AppModal from '../components/AppModal.vue'

export default {
  name: 'Search',
  data() {
    return {
      movies: null,
      picked: null,
      show: false
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
    },
    hideModal() {
      this.show = !this.show
      this.picked = null
    },
    showModal(e) {
      const ele = e.target
      this.show = !this.show
      this.picked = this.movies.find(item => item.id === +ele.id)
    }
  },
  components: { AppSearch, AppCard, AppModal }
}
</script>
<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
}
.search {
  width: 100%;
  min-height: 100vh;
}
.card-container {
  width: 92%;
  column-count: 3;
  column-width: 300px;
  padding: 3rem 0;
  margin: 0 auto;
}
</style>
