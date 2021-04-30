<template>
<section>
  <form>
  <h1>Add New Articles</h1>
  <div class="form-group">
    <p>Title</p>
    <input type="text" v-model="title" class="form-control"/>
    <p>Text</p>
    <textarea class="form-control" v-model="text" rows="3"></textarea>
  </div>

<p>
  <nuxt-link to="/">To Home Page</nuxt-link>
</p>
    </form>
  <button @click="addArticles" class="btn btn-primary">Add</button>
</section>
</template>
<script>
export default {
  layout: 'empty',
  data: () => ({
    title: '',
    text: ''
  }),
  methods: {
    async addArticles () {
      const response = await this.$axios.$post('http://localhost:4000/articles/', { title: this.title, text: this.text })
      if (!response) {
        alert(response)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
form{
  width: 500px;
  margin: 0 auto;
}
</style>
