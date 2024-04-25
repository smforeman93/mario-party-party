<script setup>
import GAMES from '../lookups/game_attributes.js';
import { useStore } from 'vuex';

const store = useStore();

function selectGame(game) {
  store.commit('setGame', game.id);
}
</script>

<template>
  <div class="greetings">
    <v-combobox @update:modelValue ="selectGame" label="Game Title" :items="GAMES" item-title="name" item-value="id"></v-combobox>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
