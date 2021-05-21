<template>
  <header class="header">
    <div class="wrapper">
      <nav>
        <a href="#games">Jogos</a>
        <a href="#news">Notícias</a>
        <a href="#ranking">Ranking</a>
      </nav>
      <button
        class="logout"
        @click="logout"
      >
        logout
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 20px 0;
}
nav {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  text-transform: uppercase;
}
.logout {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
  background-color: #eee;
}
</style>
