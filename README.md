# Pokedex

## Objective
Use Vue, Vue CLI, Vue Router, and the PokeAPI to create a Pokedex web application. 

## Setup

### Install Dependencies
npm install

### Start Development Server
npm run serve

## Resources

### PokeAPI
[https://pokeapi.co/](https://pokeapi.co/)

### Bootstrap
[https://getbootstrap.com/](https://getbootstrap.com/)

### Sprite Function

```js
sprite: function () {
  const index =  this.url.substring(this.url.indexOf('/', 32), this.url.length -1)

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
}
```


### Pokemon Object

*Some properties were removed to make the object easier to read*

```js
{
  "abilities": [
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "id": 132,
  "name": "ditto",
  "order": 203,
  "species": {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        "front_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      }
    }
  }
}
```
