<template>
  <section class="hero">
    <figure class="background">
      <img
        src="../assets/images/hero 1.png"
        alt="Este euro vai bater"
      >
    </figure>
    <div class="paper">
      <figure class="paperTop">
        <img
          src="../assets/images/paper_1 1.svg"
          alt="paper top"
        >
      </figure>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #DF0C14;
  padding-top: 500px;
}
.background {
  position: absolute;
  top: 0;
}
.paperTop {
  position: absolute;
  right: 0;
  left: 0;
  bottom: calc(100% - 10px);
}
.paper {
  background-color: #F4F4F3;
  max-width: 940px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 40px 60px;
  p {
    max-width: 640px;
    font-size: 15px;
    line-height: 18px;
    margin: 0 auto;
  }
}
</style>
