<template>
  <div class="row">
    <div class="col">
      <h1 class="display-4">Pokedex</h1>
    </div>
  </div>
  <div class="row">
    <div class="col col-6 col-md-4 col-lg-3 mb-3" 
          v-for="(pokemon, index) in pokedex"
        :key="index">
      <div class="card text-center">
        <router-link class="text-decoration-none" :to="'/pokemon/' + pokemon.name">
        <div class="card-body p-3">
            <Sprite :name="pokemon.name" :url="pokemon.url" />
        </div>
        <div class="card-footer text-muted">
          <span class="text-capitalize">{{ pokemon.name }}</span>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Sprite from '../components/Sprite.vue'

export default {
  name: 'Pokedex',
  components: {
    Sprite
  },
  data: function () {
    return {
      pokedex: []
    }
  },
  created: function () {
    const pokedex = localStorage.getItem('pokedex')

    if (pokedex) {
      this.pokedex = JSON.parse(pokedex)
    } else {  
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(json => { this.pokedex = json.results })
    }
  },
  watch: {
    pokedex: {
      deep: true,
      handler: function (pokedex) {
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
      }
    }
  }
}
</script>