<template>
  <div class="hello">
    <h1>{{ msg }}{{count}}</h1>
    <b-alert show>Default Alert</b-alert>
    <button @click="increment()">INCREMENT</button>
    <b-list-group>
      <b-list-group-item href="http://apple.com">iPhone<b-badge>5</b-badge>
      </b-list-group-item>
      <b-list-group-item>OnePlus 3T</b-list-group-item>
      <b-list-group-item>Samsung Galaxy 8</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Employer from "../models/Employer";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private work!: Employer;
  count = 0
  constructor() {
    super();
    let work = new Employer("1", "IBS", "SSE");
    console.dir(work);
  }
  increment() { this.count++ }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
