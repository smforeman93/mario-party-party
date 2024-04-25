<script setup>
import GAMES from '../lookups/game_attributes.js';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const getMaxPlayers = computed(() => {
  const selectedGame = GAMES.find(g => g.id === store.state.selectedGameId);

  return selectedGame?.max_players || 4;
})

function selectNumPlayers(numPlayers) {
  store.commit('setSelectedNumPlayers', numPlayers);
}
</script>

<template>
  <div class="greetings">
    <v-slider
      step=1
      :max="getMaxPlayers"
      min=0
      track-color="green"
      track-fill-color="red"
      @update:modelValue="selectNumPlayers"
      label="Number of Players"
      thumb-label="always"
    ></v-slider>
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
