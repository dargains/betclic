<template>
  <section class="login">
    <div class="intro">
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
          <p>Este é um site privado de acesso reservado.</p>
          <p>
            Para solicitar Log In <a href="mailto:d.nascimento@betclicgroup.com">clique aqui</a>
          </p>
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
          <figure class="paperBottom">
            <img
              src="../assets/images/homem 1.png"
              alt="Dude"
            >
          </figure>
        </div>
        <figure class="logo">
          <img
            src="../assets/images/logo.svg"
            alt="BetClic"
          >
        </figure>
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
        this.isLoading = false
        this.error = message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  padding: 30px;
  overflow: hidden;
}
.intro {
  background-color: #df0c14;
  height: 100%;
}
.form {
  padding: 10px 50px 40px;
  text-align: center;
  max-width: 500px;
  top: -100px;
  margin: 0 auto;
  background-color: #f4f4f3;
}
p {
  font-size: 15px;
  margin-bottom: 8px;
}
label {
  display: block;
  margin-bottom: 24px;
  margin-top: 20px;
}
input {
  width: 100%;
  background-color: #c4c4c4;
  border: 0;
  width: 100%;
  padding: 16px;
  font-size: 20px;
  font-style: italic;
  font-family: Gotham;
}
.error {
  color: #df0c14;
  margin-bottom: 20px;
}
.button {
  transform: rotate(-1.5deg);
  background-image: url("../assets/images/plastic_1.png");
  background-color: #000;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px 60px;
  z-index: 1;
  span {
    font-size: 28px;
    color: #fff;
    font-weight: bold;
  }
}
.paperTop {
  position: absolute;
  top: -110px;
  left: 0;
  right: 0;
}
.paperBottom {
  position: absolute;
  width: 560px;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
}
.logo {
  position: absolute;
  right: 0;
  bottom: -100px;
  width: 240px;
}
@media screen and (max-width: 768px) {
  section {
    padding: 12px;
  }
  .background {
    img {
      width: 160%;
      left: -30%;
    }
  }
  .paperTop {
    top: auto;
    bottom: calc(100% - 2px);
  }
  .form {
    top: 0;
    padding: 10px 12px 40px;
  }
  input {
    font-size: 14px;
    padding: 10px 8px;
  }
}
</style>
