<template>
  <div class="favs" v-if="movies">
    <header>
      <div class="toolbar">
        <button class="button-flat" @click="back">
          <font-awesome-icon class="icon" :icon="left"></font-awesome-icon>
          Back
        </button>
        <span class="separator"></span>
        <h1>Favorites</h1>
      </div>
    </header>
    <section class="favs__details">
      <app-detail
        @change="onChange"
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
      />
    </section>
  </div>
</template>

<script>
import AppDetail from '@/components/AppDetail.vue'
import { getData } from '@/services'
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
    return this.onChange()
  },

  methods: {
    onChange() {
      getData()
        .then(data => {
          const user = data.filter(
            item => item.username === this.$auth.user.email
          )[0]
          const { movies } = user
          this.movies = movies
          if (this.movies.length < 1) {
            this.$router.replace('search')
          }
        })
        .catch(err => {
          console.log('Error: ', err)
        })
    },
    back() {
      this.$router.go(-1)
    }
  },
  components: { AppDetail, FontAwesomeIcon }
}
</script>
<style lang="scss" scoped>
.favs {
  min-height: 75vh;
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 0 5rem;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 7) * 1%),
    calc(var(--alpha) * 1%)
  );
}
.favs__details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 450px));
  justify-content: center;
  gap: 8px;
  padding: 2rem 1rem 0;
}
header {
  width: 100%;
  min-height: 60px;
  height: 8vh;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) - 5) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: currentColor;
}
.toolbar {
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0;
  margin: 0 auto;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}
button {
  font-size: 1.3rem;
  color: hsl(
    var(--hue-primary),
    calc(var(--sat-primary) * 1%),
    calc(var(--lumin-primary) * 1%)
  );
}
</style>
