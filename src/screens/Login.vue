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
      <button-vue
        label="login"
        @handle-click="onSubmit"
      />
    </form>
  </section>
</template>

<script>
import ButtonVue from '../components/Button.vue'
export default {
  name: 'Login',
  components: {
    'button-vue': ButtonVue
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const data = {
        email: this.email,
        password: this.password
      }
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 40px;
  text-align: center;
  max-width: 200px;
  margin: 0 auto;
  background-color: lightgray;
  label {
    display: block;
    margin-bottom: 16px;
  }
  span {
    text-transform: uppercase;
    display: block;
    text-align: left;
    font-size: .7em;
  }
  button {
    width: 100%;
    background-color: black;
    color: white;
    padding: 4px 10px;
    text-transform: uppercase;
  }
  input {
    width: 100%;
  }
}
</style>
