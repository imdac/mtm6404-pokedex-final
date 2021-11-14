<template>
    <img :src="sprite" :alt="name">
</template>

<script>
export default {
  props: ['name', 'url'],
  computed: {
    sprite: function () {
      const index =  this.url.substring(this.url.indexOf('/', 32) + 1, this.url.length -1)

      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
    }
  }
}
</script>