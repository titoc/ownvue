<template>
  <div>{{experiences}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Employer from "../models/Employer";
import EmployerService from "../services/EmployerService";

@Component
export default class WorkExperiences extends Vue {
  experiences: Employer[] = [];
  service: EmployerService;

  constructor() {
    super();
    console.log("Im init");
    this.service = new EmployerService();
    this.experiences = this.service.getWorkExperiences();
    console.dir(this.service.getWorkExperiences()[0].designation);
  }
}
</script>

<style>
</style>
