<template>
  <main>
    <login />
    <home />
  </main>
</template>

<script>
import Login from './screens/Login.vue'
import Home from './screens/Home.vue'

export default {
  name: 'App',
  components: {
    Login,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  scroll-behavior: smooth;
}
</style>
