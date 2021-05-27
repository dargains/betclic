<template>
  <section
    id="ranking"
    class="ranking"
  >
    <div class="wrapper">
      <div>
        <figure class="paperTop">
          <img
            src="../assets/images/paper_2 1.svg"
            alt="paper top"
          >
        </figure>
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
        <div>
          <figure class="paperBottom">
            <img
              src="../assets/images/homem 1.png"
              alt="Dude"
            >
          </figure>
          <figure class="logo">
            <img
              src="../assets/images/logo.svg"
              alt="Logo"
            >
          </figure>
        </div>
      </div>
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
    z-index: 1;
    background-color: #DF0C14;
  }
  .wrapper {
    max-width: 1000px;
  }
  .paperTop {
    position: absolute;
    right: 0;
    left: 0;
    top: -60px;
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
    transform: rotate(1.5deg);
    background-image: url('../assets/images/plastic_1.png');
    background-color: #000;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 10px 16px;
    display: inline-block;
    top: -20px;
    left: 30px;
  }
  .items {
    padding: 0 30px 120px;
    display: flex;
    flex-direction: column;
    background-color: #F4F4F3;
    margin-bottom: -90px;
  }
  .item {
    display: flex;
    gap: 8px;
    padding: 20px 0;
    border-bottom: 1px solid #C4C4C4;
  }
  .name {
    margin-left: 20px;
    flex: 1;
  }
  .paperBottom {
    top: 0;
    left: -60px;
    width: calc(100% + 120px);
  }
  .logo {
    position: absolute;
    left: 50%;
    bottom: 17%;
    transform: translateX(-50%);
    width: 50%;
  }
</style>
