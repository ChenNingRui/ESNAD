<template>
  <div id="homePage">
    <NavBar/>
    <h1 class="title is-1">{{this.$store.state.navBarOption}}</h1>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "homePage",
  components: {
    NavBar: NavBar
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
