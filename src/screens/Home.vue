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
import AppHeader from '../components/Header'
import Hero from '../components/Hero'
import Games from '../components/Games'
import News from '../components/News'
import Ranking from '../components/Ranking'
import AppFooter from '../components/Footer'

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

<style lang="scss" scoped></style>
