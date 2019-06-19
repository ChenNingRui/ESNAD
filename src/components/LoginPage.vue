<template>
  <div id="loginPage">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <article class="card is-rounded">
              <!-- container -->
              <div class="card-content">
                <!-- title and logo -->
                <h1 class="title">
                  <img src="../resource/logo.png" alt="ESNLogo" width="30">
                  ESN Växjö Administor
                </h1>
                <!-- Username Input -->
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Text input" v-model="username">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <!-- Password Input -->
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>

                <!-- hint -->
                <div class="field">
                  <p
                    class="help is-danger"
                    v-if="isPasswordCorrect"
                  >The username or password is invalid</p>
                </div>

                <!-- Submit Button -->
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-medium is-fullwidth" @click="onClickButton">
                      <i class="fa fa-user"></i>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      username: "",
      password: "",
      isPasswordCorrect: false //false: hidden, true: show
    };
  },
  methods: {
    onClickButton() {
      if (this.username !== "1" || this.password !== "1") {
        //login fail
        this.isPasswordCorrect = true;
      } else {
        //login success
        this.$router.push({ path: "/HomePage" });
        //this.isPasswordCorrect = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
