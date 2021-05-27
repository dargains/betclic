<template>
  <section
    id="ranking"
    class="ranking"
  >
    <div class="wrapper">
      <h2>Ranking</h2>
      <ul class="items">
        <li
          v-for="(item, index) in items"
          :key="item.id"
          class="item"
        >
          <span v-text="`${index + 1}º`" />
          <p
            class="name"
            v-text="item.name"
          />
          <p v-text="`${item.points} PTS`" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Ranking',
  computed: {
    items () {
      return this.$store.getters.ranking
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking {

  background-color: #DF0C14;
}
  .items {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }
  .item {
    display: flex;
    gap: 8px;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  .name {
    flex: 1;
  }
</style>
