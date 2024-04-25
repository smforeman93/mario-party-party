<script setup>
  import { ref } from 'vue'
  import { createApp } from 'vue'
  import App from './App.vue'
  import GamePicker from './components/GamePicker.vue'
  import NumPlayers from './components/NumPlayers.vue'
  import GAMES from './lookups/game_attributes.js'
  import { useStore } from 'vuex'

  const store = useStore()
  const titleClass = ref('title');
  const count = ref(0);
  function increment() {
    // update component state
    count.value++;
    // store.commit('increment', 5)
    // console.log(store.state.count)
  }

  function getCharacters(gameId) {
    const selectedGame = GAMES.filter(g => g.id === gameId);
    // should really just use a store here
  }

</script>

<template>
  <header>
    <h1>Welcome to Mario Party Party!</h1>
  </header>
  <br>
  <game-picker></game-picker>
   <br>
  <num-players></num-players>
  <button v-on:click="increment">Get Started</button>
</template>

<style>
</style>