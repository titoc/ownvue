<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col">
        <b-navbar toggleable="lg" type="dark" :variant="dynamicTheme">
          <b-navbar-brand href="#">
            <b-img
              class="d-inline-block align-top"
              rounded="circle"
              v-bind="mainProps"
              :src="require('./assets/images/titoc.jpg')"
              alt="Circle image"
            />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/resume">Resume</b-nav-item>
              <b-nav-item to="/sideprojects">Side Projects</b-nav-item>
              <b-nav-item to="/contact">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      themes: ["primary", "success", "info", "warning", "danger", "dark"],
      mainProps: {
        blank: false,
        blankColor: "#777",
        width: 60,
        height: 60,
        class: "m1"
      }
    };
  },
  computed: {
    dynamicTheme: function () {
      return this.themes[Math.floor(Math.random() * this.themes.length)];
    }
  }
};
</script>
<style lang="scss">
</style>
