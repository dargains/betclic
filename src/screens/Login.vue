<template>
  <section class="login">
    <div class="wrapper">
      <figure class="background">
        <img
          src="../assets/images/hero 1.png"
          alt="Este euro vai bater"
        >
      </figure>
      <div class="form">
        <figure class="paperTop">
          <img
            src="../assets/images/paper_1 1.svg"
            alt="paper top"
          >
        </figure>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <label for="email">
          <input
            id="email"
            v-model="email"
            type="text"
            placeholder="email"
          >
        </label>
        <label for="password">
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="password"
          >
        </label>
        <p
          v-if="error"
          class="error"
          v-text="error"
        />
        <p
          v-if="isLoading"
          class="loading"
          v-text="`a carregar...`"
        />
        <button
          class="button"
          @click="onSubmit"
        >
          <span>login</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: '',
      isLoading: false
    }
  },
  methods: {
    onSubmit () {
      this.error = ''
      this.isLoading = true
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data).catch(message => {
        this.error = message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #DF0C14;
  min-height: 100vh;
}
.button {
  transform: rotate(-1.5deg);
  background-image: url('../assets/images/plastic_1.png');
  background-color: #000;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px 60px;
  span {
    font-size: 28px;
    color: #FFF;
    font-weight: bold;
  }
}
.form {
  padding: 40px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  background-color: #F4F4F3;
}
p {
  font-size: 15px;
}
label {
  display: block;
  margin-bottom: 24px;
}
input {
  width: 100%;
  background-color: #C4C4C4;
  border: 0;
  width: 100%;
  padding: 16px;
  font-size: 24px;
  font-style: italic;
  font-family: Gotham;
}
.error {
  color: red;
  margin-bottom: 8px;
}
.paperTop {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
}
</style>
