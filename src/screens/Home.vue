<template>
  <section class="home">
    <app-header />
    <hero />
    <games />
    <news />
    <ranking />
    <app-footer />
  </section>
</template>

<script>
import AppHeader from '../modules/Header'
import Hero from '../modules/Hero'
import Games from '../modules/Games'
import News from '../modules/News'
import Ranking from '../modules/Ranking'
import AppFooter from '../modules/Footer'

export default {
  components: {
    AppHeader,
    Hero,
    Games,
    News,
    Ranking,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 30px;
}
@media screen and (max-width: 768px) {
  .home {
    padding: 12px;
  }
}
</style>
