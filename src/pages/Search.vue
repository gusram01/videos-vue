<template>
  <div class="search">
    <app-modal :show="show" v-bind:picked="picked" @close="hideModal" />
    <div class="navsearch-container">
      <app-search @title="search" @clear="clearScreen" />
    </div>
    <app-paginator
      v-if="movies"
      :pages="pages"
      :loading="loading"
      @next="next"
      @back="back"
    />
    <div class="card-container">
      <p v-if="movies && movies.length < 1">
        Sorry!! Not found any results...
        <br />
        Please Try with another title
      </p>
      <app-spinner v-if="loading" />
      <div>
        <app-card
          @movie="showModal"
          v-for="movie in movies"
          v-bind:movie="movie"
          v-bind:key="movie.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { find } from '@/services'
import AppSearch from '@/components/AppSearch.vue'
import AppCard from '@/components/AppCard.vue'
import AppModal from '@/components/AppModal.vue'
import AppSpinner from '../components/AppSpinner.vue'
import AppPaginator from '../components/AppPaginator.vue'

export default {
  name: 'Search',
  data() {
    return {
      movies: null,
      picked: null,
      show: false,
      loading: false,
      pages: {},
      title: null
    }
  },
  methods: {
    search(title) {
      this.loading = true
      this.movies = null
      this.title = title
      find(title)
        .then(data => {
          this.pages.page = data.data.page
          this.pages.total_pages = data.data.total_pages
          this.pages.total_results = data.data.total_results
          this.pages.items_page = data.data.results.length
          if (data.data.results.length < 1) {
            return (this.movies = [])
          }
          this.movies = data.data.results
        })
        .catch(err => {
          console.error(err)
          return (this.movies = [])
        })
        .then(() => (this.loading = false))
    },
    clearScreen() {
      this.movies = null
      this.pages = {}
    },
    hideModal() {
      this.show = !this.show
      this.picked = null
    },
    showModal(movie) {
      this.show = !this.show
      this.picked = movie
    },
    next() {
      this.pages.page += 1
      this.searchByPage()
    },
    back() {
      this.pages.page -= 1
      this.searchByPage()
    },
    searchByPage() {
      this.loading = true
      this.movies = null
      find(this.title, this.pages.page)
        .then(data => {
          this.pages.page = data.data.page
          this.pages.total_pages = data.data.total_pages
          this.pages.total_results = data.data.total_results
          if (data.data.results.length < 1) {
            return (this.movies = [])
          }
          this.movies = data.data.results
        })
        .catch(err => {
          console.error(err)
          return (this.movies = [])
        })
        .then(() => (this.loading = false))
    }
  },
  components: { AppSearch, AppCard, AppModal, AppSpinner, AppPaginator }
}
</script>
<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
}
.search {
  width: 100%;
  min-height: 87vh;
  margin: 0 auto;
  padding-top: 3rem;
  text-align: center;
}
.navsearch-container {
  display: flex;
  justify-content: center;
  width: 96%;
  margin: 0 auto;
}
.card-container {
  width: 92%;
  column-count: 3;
  column-width: 300px;
  padding: 3rem 0;
  margin: 0 auto;
}
</style>
