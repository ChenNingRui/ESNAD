<template>
  <div id="settingDialog">
    <!-- username -->
    <label class="label">Username</label>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Username">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <!-- Password -->
    <label class="label">Password</label>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <!-- email -->
    <label class="label">Email</label>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>

    <!-- job title -->
    <label class="label">Job title</label>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Job title">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>

    <!-- priority -->
    <label class="label">Priority</label>
    <div class="field">
      <p class="control has-icons-left">
        <span class="select">
          <select>
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-chess-king"></i>
        </span>
      </p>
    </div>

    <!-- status -->
    <label class="label">Status</label>
    <i-switch size="large">
      <span slot="open">active</span>
      <span slot="close">suspend</span>
    </i-switch>
  </div>
</template>

<script>
export default {
  name: "settingDialog",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
