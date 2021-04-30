<template>
  <section>
 <h1>{{ article.title }}</h1>
    <p> {{ article.text }}</p>

    <button  class="btn btn-warning" @click="select">edit</button>
    <button class="btn btn-danger" @click="deleteIt">delete</button>
    <div v-if="edited">
      <div class="mb-3" >
        <label class="form-label">Title</label>
        <input v-model="editedTitle" type="text" class="form-control" v-bind:placeholder="article.title">
      </div>
      <div class="mb-3">
        <label  class="form-label">Text</label>
        <textarea class="form-control" v-model="editedText"  v-bind:placeholder="article.text" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn-primary" @click="editIt">Put</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const article = await $axios.$get('http://localhost:4000/articles/' + params.id)
    return { article }
  },
  data: () => ({
    edited: false,
    editedTitle: '',
    editedText: ''
  }),
  methods: {
    select () {
      this.edited = (this.edited === true) ? this.edited = false : this.edited = true
    },
    async deleteIt () {
      const response = await this.$axios.$delete('http://localhost:4000/articles/' + this.$route.params.id)
      if (!response) { alert('Something going wrong, try again') }
      this.$router.push('/')
    },
    async editIt () {
      const response = await this.$axios.$put('http://localhost:4000/articles/' + this.$route.params.id, {
        title: this.editedTitle,
        text: this.editedText
      })
      if (!response) { alert('Something going wrong, try again') }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
