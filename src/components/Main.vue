<template>
  <Sidebar />
  <div class="content">
    <div class="top-bar">
      <h1 class="top-bar__headline">Discover great places to visit</h1>
      <div class="top-bar__toggle">
        <div class="card"></div>
        <div class="list"></div>
      </div>
    </div>
  </div>
</template>

<script>
import cityData from "./../data/data.json";
import Sidebar from "./Sidebar";
import './styles/main.scss';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      appData: cityData,
    };
  },
};
</script>
