<template>
  <div class="form-container">
    <form class="form" id="search" @submit="onSubmit">
      <label for="title">Search</label>
      <input
        type="text"
        placeholder="Search title"
        v-model="title"
        id="title"
      />
      <button>
        <font-awesome-icon :icon="searchIcon"></font-awesome-icon>
      </button>
    </form>

    <div class="nav">
      <button @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { clearSession } from '@/services'

export default {
  name: 'AppSearch',
  data() {
    return {
      errors: {},
      title: '',
      searchIcon: faSearch
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
        return this.$emit('title', this.title)
      }
    },
    logout() {
      clearSession()
      this.$router.replace('/')
    }
  },
  components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped></style>
