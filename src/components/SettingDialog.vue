<template>
  <div id="settingDialog">
    <!-- username -->
    <label class="label">Username</label>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Username"
          v-bind:value="this.data ? this.data.name : ''"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <!-- Password -->
    <label class="label">Password</label>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Password" v-model="password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <!-- email -->
    <label class="label">Email</label>
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-bind:value="this.data ? this.data.email : ''"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>

    <!-- job title -->
    <label class="label">Job title</label>
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Job title"
          v-bind:value="this.data ? this.data.jobTitle : ''"
        />
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
          <select v-bind:value="this.data ? this.data.priority : 1">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-chess-king"></i>
        </span>
      </p>
    </div>

    <!-- status -->
    <label class="label">Status</label>
    <i-switch size="large" v-bind:value="this.data ? this.data.status : true">
      <span slot="open">Active</span>
      <span slot="close">Suspect</span>
    </i-switch>
  </div>
</template>

<script>
export default {
  name: "settingDialog",
  components: {},
  props: {
    data: {
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {
      password: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
