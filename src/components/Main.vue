<template>
  <Sidebar />
  <div class="content">
    <div class="top">
      <div class="top-bar">
        <h1 class="top-bar__headline">Discover great places to visit</h1>
        <div class="top-bar__toggle">
          <div class="grid" v-on:click="setCardMode()" :class="appData.previewInListMode ? '' : 'active'"></div>
          <div class="list" v-on:click="setListMode()" :class="appData.previewInListMode ? 'active' : ''"></div>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container">
        <Card
          v-for="(card, index) in appData.cities"
          :key="card.id"
          v-bind:cityData="card"
          v-bind:index='index'
        />
        <span class="card break"></span>
        <span class="card break"></span>
        <span class="card break"></span>
      </div>
    </div>
  </div>
</template>

<script>
// import cityData from "./../data/data.json";
import Card from "./Card.vue";
import Sidebar from "./Sidebar";
import "./styles/main.scss";

export default {
  components: {
    Sidebar,
    Card,
  },
  data() {
    return {
      appData: this.$store.state,
    };
  },
  methods: {
    setCardMode: function () {
      this.$store.commit('setCardView')
    },
    setListMode: function () {
      this.$store.commit('setListView')
    }
  }
};
</script>
