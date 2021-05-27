<template>
  <section class="home">
    <app-header />
    <hero />
    <games />
    <news />
    <prize />
    <ranking />
    <app-footer />
  </section>
</template>

<script>
import AppHeader from '../modules/Header'
import Hero from '../modules/Hero'
import Games from '../modules/Games'
import News from '../modules/News'
import Prize from '../modules/Prize'
import Ranking from '../modules/Ranking'
import AppFooter from '../modules/Footer'

export default {
  components: {
    AppHeader,
    Hero,
    Games,
    News,
    Prize,
    Ranking,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 30px;
}
</style>
