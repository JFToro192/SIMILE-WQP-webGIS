<template>
  <WebGISContainer/>
</template>

<script>
import 'css/style.css'
import WebGISContainer from './components/WebGISContainer.vue'
export default {
  name: 'App',
  components: {
    WebGISContainer,
  }
}
</script>

<style scoped>
  img {
    width: 5em;
  }
</style>