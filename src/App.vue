<template>
  <div id="app"
    class="container-fluid">
    <div class="row">
      <div class="col">
        <b-navbar toggleable="lg"
          type="dark"
          variant="info">
          <b-navbar-brand href="#">
            <b-img left
              rounded="circle"
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              alt="Circle image" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse"
            is-nav>
            <b-navbar-nav>
              <b-link to="home">Home</b-link>
              <b-nav-item to="/resume">Resume</b-nav-item>
              <b-nav-item href="/sideprojects">Side Projects</b-nav-item>
              <b-nav-item href="/about">About</b-nav-item>
              <b-nav-item href="/contact">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

        <router-link to="/resume">Resume</router-link>|
        <router-link to="/sideprojects">Side Projects</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/contact">Contact</router-link>|
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
  data() {
    return {
      mainProps: { blank: false, blankColor: '#777', width: 60, height: 60, class: 'm1' }
    }
  }
}
</script>
<style lang="scss">
</style>
