<template>
  <section class="login">
    <div>
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
          type="password"
        >
      </label>
      <button-vue
        label="login"
        @handle-click="onSubmit"
      />
    </div>
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
      this.$store.dispatch('login', data)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 40px;
  text-align: center;
  max-width: 200px;
  margin: 0 auto;
  background-color: lightgray;
}
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
  input {
    width: 100%;
  }
</style>
