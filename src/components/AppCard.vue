<template>
  <article class="card">
    <h1>{{ title }}</h1>
  </article>
</template>

<script>
export default {
  props: {
    backdrop_path: String, // "/kU7ZiyeUwcpTkYj3UcxSqGdZmxY.jpg"
    id: Number, // 618353
    original_language: String, // "en"
    // original_title: String,// "Batman: Death in the Family"
    overview: String, // "Tragedy strikes the Batman's life again when Robin Jason Todd tracks down his birth mother only to run afoul of the Joker. An adaptation of the 1988 comic book storyline of the same name."
    // poster_path: // "/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg"
    // release_date: // "2020-10-13"
    title: String, // "Batman: Death in the Family"
    // video: // false
    vote_average: Number // 7.3
    // vote_count: // 142
  },
  name: 'AppCard'
}
</script>

<style lang="scss" scoped></style>
