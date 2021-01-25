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
    <app-spinner v-if="loading" />
    <app-empty :showModal="showExitWarn" @close="handleExitWarn">
      <h3>
        To exit please click Logout
      </h3>
    </app-empty>
    <div class="card-container">
      <p v-if="movies && movies.length < 1">
        Sorry!! Not found any results...
      </p>
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
import AppSearch from '@/components/AppSearch.vue'
import AppCard from '@/components/AppCard.vue'
import AppModal from '@/components/AppModal.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppPaginator from '@/components/AppPaginator.vue'
import AppEmpty from '../components/AppEmpty.vue'
import { initUser, find } from '@/services'

export default {
  name: 'Search',
  data() {
    return {
      showExitWarn: false,
      movies: null,
      picked: null,
      show: false,
      loading: false,
      pages: {},
      title: null
    }
  },

  mounted: function() {
    initUser(this.$auth.user.email)
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
          console.error('on send req', err)
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
    handleExitWarn() {
      this.showExitWarn = !this.showExitWarn
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
  beforeRouteLeave(to, from, next) {
    if (to.name === 'home' && this.$auth.isAuthenticated) {
      console.log('nop')
      this.showExitWarn = true
      return next(false)
    }
    return next()
  },
  components: {
    AppSearch,
    AppEmpty,
    AppCard,
    AppModal,
    AppSpinner,
    AppPaginator
  }
}
</script>
<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
}
.search {
  width: 100%;
  max-width: 1368px;
  min-height: 87vh;
  margin: 0 auto;
  padding-top: 3rem;
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
