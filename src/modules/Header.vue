<template>
  <header class="header">
    <div class="wrapper">
      <nav>
        <a href="#games">Jogos</a>
        <a href="#news">Notícias</a>
        <a href="#prize">Prémio</a>
        <a href="#ranking">Ranking</a>
      </nav>
      <button
        class="logout"
        @click="logout"
      >
        <span>logout</span>
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
  z-index: 1;
}
nav {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  text-transform: uppercase;
}
.logout {
  position: absolute;
  right: 40px;
  top: 0;
  padding: 16px 40px;
  background-color: #000;
  transform: rotate(1.5deg);
  background-image: url('../assets/images/plastic_3 1.png');
  background-color: #000;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  span {
    color: #FFF;
    font-size: 18px;
  }
}
@media screen and (max-width: 768px) {
  .header {
    padding: 10px 0;
  }
  nav {
    display: none;
  }
  .logout {
    right: 10px;
    top: -10px;
  }
}
</style>
