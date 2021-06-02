<template>
  <footer class="footer">
    <div class="wrapper">
      <p>BETCLIC EURO 2021</p>
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
@media screen and (max-width: 768px) {
  footer {
    padding-top: 20px;
    padding-bottom: 0;
  }
  .wrapper {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  a {
    margin-left: 0;
    display: block;
    margin-top: 16px;
    font-size: 12px;
  }
}
</style>
