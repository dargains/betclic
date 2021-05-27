<template>
  <section
    id="news"
    class="news"
  >
    <div class="wrapper">
      <h2>Notícias</h2>
      <div class="items">
        <article
          v-for="item in items"
          :key="item.id"
          class="item"
        >
          <h3
            class="title"
            v-text="item.title"
          />
          <p
            class="text"
            v-text="item.text"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
  computed: {
    items () {
      return this.$store.state.news
    }
  }
}
</script>

<style lang="scss" scoped>
.news {

  background-color: #DF0C14;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  background-color: #eee;
  padding: 40px;
  margin-top: 20px;
}
.item {
  background-color: #fff;
  padding: 20px;
}
.title {
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.text {
  font-size: .8rem;
}
@media (max-width: 768px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
