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
          <figure class="paperTop">
            <img
              src="../assets/images/paper_2 5.svg"
              alt="paper top"
            >
          </figure>
          <div class="text">
            <h3
              class="title"
              v-text="item.title"
            />
            <p
              class="text"
              v-text="item.text"
            />
          </div>
          <a
            class="link"
            target="_blank"
            :href="item.file.data.full_url"
          >Saber mais</a>
          <figure class="paperBottom">
            <img
              src="../assets/images/paper_2 4.svg"
              alt="paper bottom"
            >
          </figure>
        </article>
      </div>

      <figure
        id="prize"
        class="prize"
      >
        <img
          src="../assets/images/prize.png"
          alt="Prémio"
        >
      </figure>
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
@mixin break-line($line) {
  display: -webkit-box;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: $line;
  -moz-line-clamp: $line;
  -ms-line-clamp: $line;
  line-clamp: $line;
}
.news {
  background-color: #DF0C14;
  padding-top: 100px;
  z-index: 1;
  margin-bottom: -340px;
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
  z-index: 2;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 40px;
  top: -20px;
  width: 95%;
  margin: 0 auto;
  z-index: 1;
}
.item {
  background-color: #F4F4F3;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.text {
  flex: 1;
}
.title {
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
  @include break-line(3);
}
.text {
  font-size: 14px;
  line-height: 18px;
  text-transform: none;
  @include break-line(5);
}
.link {
  display: inline-block;
  margin-top: 30px;
  text-decoration: none;
  font-size: 24px;
  z-index: 1;
}
.paperTop {
  position: absolute;
  bottom: 90%;
  right: 0;
  left: 0;
}
.paperBottom {
  position: absolute;
  top: 80%;
  right: 0;
  left: 0;
}
.prize {
  top: -240px;
}
@media (max-width: 768px) {
  .news {
    margin-bottom: 0;
  }
  .items {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 100px 40px;
  }
  .item {
    padding: 10px 20px 0;
  }
  .title,
  .link {
    font-size: 18px;
  }
  .paperBottom {
    top: 90%;
  }
  .prize {
    top: 0;
    overflow: hidden;
    img {
      width: 140%;
      left: -15%;
    }
  }
}
</style>
