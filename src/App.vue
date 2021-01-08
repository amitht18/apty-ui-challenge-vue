<template>
  <Main/>
</template>

<script>
import Main from "./components/Main"
import "./app.scss";

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

