<template>
  <div class="form__container shadow-2">
    <app-empty :showModal="showModal" @close="show" />
    <form class="form" id="search" @submit="onSubmit">
      <input
        type="text"
        v-model="title"
        id="title"
        :class="{ error: errors.title }"
      />
      <label
        for="title"
        :class="{ 'label-active': titleNotEmpty, error: errors.title }"
        >Search movie</label
      >
      <button class="form__search button-flat" type="submit">
        <font-awesome-icon :icon="searchIcon"></font-awesome-icon>
      </button>
      <p class="item__error error" v-if="errors.title">
        {{ errors.title }}
      </p>
    </form>

    <nav>
      <button class="button-flat" @click="clear">
        Clear
      </button>
      <button class="button-flat" @click="favs">
        Favorites
      </button>
      <button class="button-flat" @click="logout" v-if="$auth.isAuthenticated">
        Logout
      </button>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { clearSession, actualUser } from '@/services'
import AppEmpty from './AppEmpty.vue'

export default {
  name: 'AppSearch',
  data() {
    return {
      errors: {},
      title: '',
      searchIcon: faSearch,
      showModal: false,
      results: null
    }
  },

  computed: {
    titleNotEmpty: function() {
      return this.title && this.title.length > 0
    }
  },

  methods: {
    validateInputs() {
      this.errors = {}

      if (!this.title) {
        this.errors.title = 'Title is required'
      }
    },
    onSubmit(e) {
      e.preventDefault()
      this.validateInputs()
      if (!this.errors.title) {
        this.$emit('title', this.title)
        this.title = ''
      }
    },
    logout() {
      clearSession()
      this.$auth.logout({
        returnTo: window.location.origin
      })
    },
    clear() {
      this.errors = {}
      this.title = ''
      this.$emit('clear')
    },
    favs() {
      const data = actualUser()
      if (data.movies.length < 1) {
        this.show()
        return
      }
      this.$router.push('/favs')
    },
    show() {
      this.showModal = !this.showModal
    }
  },
  components: { FontAwesomeIcon, AppEmpty }
}
</script>

<style lang="scss" scoped>
.form__container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  max-width: 570px;
  padding: 1rem;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 7) * 1%),
    calc(var(--alpha) * 1%)
  );
  border-radius: 6px;
}
.form {
  position: relative;
  display: block;
  max-width: fit-content;
  min-height: 4rem;
  flex: 1;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 3rem;
  flex: 1;
}
.form__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.2rem 0;
}
input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  padding: 1.5rem 2.5rem 0.5rem 0.7rem;
  border-radius: 5px 5px 0 0;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 16) * 1%),
    calc(var(--alpha) * 1%)
  );
  color: currentColor;
}
input.error {
  border-bottom: 2px solid
    hsla(
      var(--hue-danger),
      calc(var(--sat-danger) * 1%),
      calc(var(--lumin-danger) * 1%),
      calc(var(--alpha-danger) * 1%)
    );
}
input + label {
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  opacity: 0.65;
  font-size: 0.9rem;
  transform: translate(0) scale(1);
  user-select: none;
}
input:focus-within + label {
  transform: translateY(-80%) translateX(-14%) scale(0.75);
  transition: transform 150ms ease-in, opacity 50ms linear;
}

.label-active {
  transform: translateY(-80%) translateX(-14%) scale(0.75);
  transition: transform 150ms ease-in, opacity 50ms linear;
}

.item__error {
  font-size: 0.7em;
  line-height: 0.3em;
  font-stretch: semi-condensed;
}
.form__icon {
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  cursor: pointer;
}
.form__search {
  position: absolute;
  top: 0.5rem;
  right: 0;
  margin: 0 0.2rem;
}
</style>
