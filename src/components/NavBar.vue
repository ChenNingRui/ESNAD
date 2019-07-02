<template>
  <div id="NavBar">
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../resource/logo1.png" width="120" height="30">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
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
              <a class="navbar-item" @click="onOptionClick('PreviousEvent')">Previous Event</a>
              <a class="navbar-item" @click="onOptionClick('FutureEvent')">Future Event</a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="onOptionClick('NewEvent')">New Event</a>
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
  methods: {
    onLogoutClick() {
      this.$router.push({ path: "/" });
    },
    onOptionClick(str) {
      this.$store.dispatch("changeNavBarSelection", str);
      this.$router.push({ path: "/HomePage/" + str + "Page" });
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
