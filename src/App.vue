<template>
  <div id="app">
    <menu-header></menu-header>
 
    <router-view/>
  </div>
</template>

<script >
import Header from "./pages/components/Header.vue"

export default {
  components: {
   'menu-header': Header
  }
}
 
</script>

