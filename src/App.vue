<template>
  <div id="app">
    <resource-menu></resource-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import ResourceMenu from './components/ResourceMenu.vue'

export default {
  components: {
    ResourceMenu
  },
  name: 'App',
}
</script>

<style>

</style>
