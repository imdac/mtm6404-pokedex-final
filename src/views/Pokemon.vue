<template>
  <h1 class="text-capitalize display-4" v-if="pokemon.name">{{ pokemon.name }}</h1>
  <div class="row" v-if="pokemon.name">
    <div class="col">
      <img class="img-fluid" :src="pokemon.image" :alt="pokemon.name">
    </div>
    <div class="col">
      <h2>Abilities</h2>
      <ul>
        <li 
          v-for="(ability, index) in pokemon.abilities"
          :key="index">
          {{ ability.ability.name }}
        </li>
      </ul>
    </div>
  </div>
  <div class="row" v-if="pokemon.name">
    <div class="col text-center mb-3">
      <router-link class="btn btn-secondary me-3" :to="'/pokemon/' + prev">Prev</router-link>
      <router-link class="btn btn-secondary" :to="'/pokemon/' + next">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: ['name'],
  data: function () {
    return {
      pokemon: {
        name: '',
        id: 0,
        image: '',
        abilities: []
      }
    }
  },
  created: function () {
    const pokemon = localStorage.getItem(this.name)

    if (pokemon) {
      this.pokemon = JSON.parse(pokemon)
    } else {
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
      .then(response => response.status === 200 ? response.json() : this.$router.push('/'))
      .then(pokemon => {
        this.pokemon.name = pokemon.name
        this.pokemon.id = pokemon.id
        this.pokemon.image = pokemon.sprites.other['official-artwork'].front_default
        this.pokemon.abilities = pokemon.abilities
      })
    }
  },
  computed: {
    next: function () {
      if (this.pokemon.id < 20) {
        return this.pokemon.id + 1
      }

      return 1
    },
    prev: function () {
      if (this.pokemon.id > 1) {
        return this.pokemon.id - 1
      }

      return 20
    }
  },
  watch: {
    pokemon: {
      deep: true,
      handler: function (pokemon) {
        localStorage.setItem(this.name, JSON.stringify(pokemon))
      }
    } 
  }
}
</script>