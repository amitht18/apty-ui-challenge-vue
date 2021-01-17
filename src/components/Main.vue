<template>
  <Sidebar />
  <div class="content">
    <div class="top-bar">
      <h1 class="top-bar__headline">Discover great places to visit</h1>
      <div class="top-bar__toggle">
        <div class="grid active"></div>
        <div class="list"></div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container">
        <Card
          v-for="card in appData.cities"
          :key="card.name"
          v-bind:cityData="card"
        />
        <span class="card break"></span>
        <span class="card break"></span>
        <span class="card break"></span>
      </div>
    </div>
  </div>
</template>

<script>
import cityData from "./../data/data.json";
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
      appData: cityData,
    };
  },
};
</script>
