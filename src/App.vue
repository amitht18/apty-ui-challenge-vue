<template>
  <Main/>
</template>

<script>
import Main from "./components/Main"

export default {
  components: {
    Main
  },
  name: 'App',
  data() {
    return {
      name: 'Amith',
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-body-bg);
  padding: 20px;
}
</style>
