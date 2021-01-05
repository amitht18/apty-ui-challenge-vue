<template>
  <Sidebar />

</template>

<script>

import cityData from "./../data/data.json";
import Sidebar from "./Sidebar";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      appData: cityData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>