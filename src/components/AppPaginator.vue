<template>
  <div class="paginator">
    <span class="separator"></span>
    <span class="paginator__item">{{ perPage }}</span>
    <span class="paginator__item">{{ actualResults }}</span>
    <button
      class="button-flat"
      :class="{ 'button-disabled': !activePrev || loading }"
      @click="back"
    >
      <font-awesome-icon :icon="left"></font-awesome-icon>
    </button>
    <button
      class="button-flat"
      :class="{ 'button-disabled': !activeNext || loading }"
      @click="next"
    >
      <font-awesome-icon :icon="right"></font-awesome-icon>
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'AppPaginator',
  props: {
    pages: {
      page: {
        type: Number,
        default: 0
      },
      total_pages: {
        type: Number,
        default: 0
      },
      total_results: {
        type: Number,
        default: 0
      },
      items_page: {
        type: Number,
        default: 0
      }
    },
    loading: Boolean
  },

  data() {
    return {
      left: faChevronLeft,
      right: faChevronRight
    }
  },

  computed: {
    perPage: function() {
      return `items per page: ${this.pages.items_page}`
    },
    actualResults: function() {
      return `${this.pages.page * this.pages.items_page -
        this.pages.items_page +
        1} - ${Math.min(
        this.pages.page * this.pages.items_page,
        this.pages.total_results
      )} of ${this.pages.total_results}`
    },
    activePrev: function() {
      return this.pages.page > 1
    },
    activeNext: function() {
      return this.pages.page < this.pages.total_pages
    }
  },

  methods: {
    next() {
      this.$emit('next')
    },
    back() {
      this.$emit('back')
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.paginator {
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  margin: 1rem auto;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc((var(--lumin) + 3) * 1%),
    calc(var(--alpha) * 1%)
  );
  z-index: 70000;
}
.paginator__item {
  font-size: 0.7rem;
  font-weight: 550;
  padding: 0.5rem 1rem;
  margin: 0 3px;
  line-height: 1.3rem;
  color: currentColor;
  background: hsla(
    var(--hue),
    calc(var(--sat) * 1%),
    calc(var(--lumin) * 1%),
    calc(var(--alpha) * 1%)
  );
}
</style>
