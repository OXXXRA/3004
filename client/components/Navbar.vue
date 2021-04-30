<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact class="nav-link" active-class="active" to="/">Articles</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" no-prefetch active-class="active" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" no-prefetch active-class="active" to="/add">Add</nuxt-link>
          </li>
        </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
