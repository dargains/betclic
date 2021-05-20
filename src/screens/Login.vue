<template>
  <section class="login">
    <form action="">
      <label for="email">
        <span>email</span>
        <input
          id="email"
          v-model="email"
          type="text"
        >
      </label>
      <label for="password">
        <span>password</span>
        <input
          id="password"
          v-model="password"
          type="text"
        >
      </label>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
form {
  span {
    text-transform: uppercase;
  }
}
</style>
