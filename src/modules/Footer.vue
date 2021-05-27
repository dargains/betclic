<template>
  <footer class="footer">
    <div class="wrapper">
      <p>BETCLIC EURO 2020</p>
      <div>
        <a href="#">Política de privacidade</a>
        <a href="#">Regulamento</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  padding: 30px 0;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
a {
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 60px;
}
</style>
