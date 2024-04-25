import './assets/main.css'

import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import  createVuetify from './plugins/vuetify';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      selectedGameId: null,
      selectedCharacters: [],
      selectedBoard: null,
      selectedNumTurns: 0,
      selectedNumPlayers: 0,
    };
  },
  mutations: {
    setGame (state, gameId) {
      state.selectedGameId = gameId;
    },
    setSelectedNumTurns (state, numTurns) {
      state.selectedNumTurns = numTurns;
    },
    setSelectedNumPlayers (state, numPlayers) {
      state.selectedNumPlayers = numPlayers;
    },
    restart (state) {
      state.selectedGameId = null;
      state.selectedCharacters = [];
      state.selectedBoard = null;
      state.selectedNumTurns = 0;
      state.selectedNumPlayers = 0;
    }
  }
})

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createVuetify)

app.mount('#app')
