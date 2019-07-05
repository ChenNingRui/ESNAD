<template>
  <div id="NavBar">
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../resource/logo1.png" width="120" height="30">
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-bind:class="{ 'is-active': activator }"
          @click="makeBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <!-- MemberShip -->
            <a class="navbar-link">MemberShip</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="onOptionClick('FormalMemberList')">Formal Member List</a>
              <a
                class="navbar-item"
                @click="onOptionClick('TemporaryMemberList')"
              >Temporary Member List</a>
              <hr class="navbar-divider">
              <a
                class="navbar-item"
                @click="onOptionClick('UnapprovedFormalMemberList')"
              >Unapproved Formal Member List</a>
              <a class="navbar-item" @click="onOptionClick('SignupForm')">Signup Form</a>
            </div>
          </div>
          <!-- Event -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Event</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="onOptionClick('EventList')">Event List</a>
              <a
                class="navbar-item"
                @click="onOptionClick('ApprovedEventBudget')"
              >Approved Event Budget</a>
              <a
                class="navbar-item"
                @click="onOptionClick('UnapprovedEventBudget')"
              >Unapproved Event Budget</a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="onOptionClick('SignupNewEven')">Signup New Event</a>
              <a class="navbar-item" @click="onOptionClick('NewEventBudget')">New Event Budget</a>
              <a class="navbar-item" @click="onOptionClick('EventRegister')">Event Register</a>
            </div>
          </div>
          <!-- Budget -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">General Budget</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="onOptionClick('ApprovedBudget')">Approved Budget</a>
              <a class="navbar-item" @click="onOptionClick('UnapprovedBudget')">Unapproved Budget</a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="onOptionClick('NewBudget')">New Budget</a>
            </div>
          </div>

          <!-- CashBook -->
          <a class="navbar-item" @click="onOptionClick('CashBook')">CashBook</a>

          <!-- Slottsstallarna -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Slottsstallarna</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="onOptionClick('WorkersList')">Workers' List</a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="onOptionClick('SignupNewWorkers')">Signup New Workers</a>
            </div>
          </div>
          <a class="navbar-item" @click="onOptionClick('Setting')">Setting</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong @click="onLogoutClick">Logout</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activator: false
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    },
    onLogoutClick() {
      this.$router.push({ path: "/" });
    },
    onOptionClick(str) {
      this.$store.dispatch("changeNavBarSelection", str);
      this.$router.push({ path: "/HomePage/" + str + "Page" });

      this.activator = !this.activator;
      return this.activator;
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
