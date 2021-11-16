<template>
  <div id="app">
    <menu-header></menu-header>
    
    <router-view/>
  </div>
</template>

<script lang="ts">
import Header from "./pages/components/Header.vue"

export default {
  components: {
   'menu-header': Header
  }
}
 
</script>

