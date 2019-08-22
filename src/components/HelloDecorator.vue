<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    {{work}}
    {{experiences}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Employer from "../models/Employer";
import EmployerService from "../services/EmployerService";

@Component
export default class HelloDecorator extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;
  work!: Employer;
  experiences: Employer[] = [];
  enthusiasm = this.initialEnthusiasm;
  service: EmployerService;

  constructor() {
    super();
    this.enthusiasm = 0;
    console.log("Im init");
    this.work = new Employer("1", "IBS", "SSE");
    this.experiences.push(this.work);
    this.service = new EmployerService();
    //console.dir(this.work);
    console.dir(this.service.getWorkExperiences()[0].name);
  }
  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!');
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>