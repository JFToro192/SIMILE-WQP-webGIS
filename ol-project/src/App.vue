<template>
  <WebGISContainer
    :settings="settings"
  />
</template>

<script>
// Import App components
import 'css/style.css'
import WebGISContainer from './components/WebGISContainer.vue'

// Settings
import {settings} from '@/assets/js/settings'

export default {
  name: 'App',
  	data () {
    	return {
      		settings: settings,
		}
	},
	components: {
		WebGISContainer,
	},
}
</script>

<style scoped>
  img {
    width: 5em;
  }
</style>