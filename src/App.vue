<template>
  <main>
    <login v-if="!user.id" />
    <home v-else />
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
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style>
#app {
  font-family: Gotham, 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  scroll-behavior: smooth;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
@media (max-width: 768px) {
  .wrapper {
    padding: 0 12px;
  }
}
</style>
