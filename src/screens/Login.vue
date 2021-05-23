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
  .error {
    color: red;
    margin-bottom: 8px;
  }
</style>
