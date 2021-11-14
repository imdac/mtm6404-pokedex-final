<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light mb-5">
    <router-link class="nav-link" to="/">Pokedex</router-link> 
  </nav>
  <div class="container" v-cloak>
    <div class="row">
      <div class="col">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<style scoped>
[v-cloak] > * {
  display: none !important;
}
</style>