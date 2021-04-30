<template>
  <section>
    <h1>Articles</h1>
    <ul>
      <li v-for="article of articles" :key="article.id">
        <nuxt-link v-bind:to="'/articles/' + article._id">{{ article.title }} </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const articles = await $axios.$get('http://localhost:4000/articles')
    return { articles }
  }
}
</script>

<style scoped/>
