<template>
  <div>
    <div v-for="experience in experiences"
      v-bind:key="experience.id">
      {{experience.id}} , {{experience.logo}} , {{experience.companyLink}} , {{experience.name}}
      ,{{experience.designation}} , {{experience.from.year}} - {{experience.from.month}}
      , {{experience.to.year}} - {{experience.to.month}}
      <div v-for="skill in experience.skills"
        v-bind:key="skill">
        {{skill}}
      </div>
      <div v-for="activity in experience.activities"
        v-bind:key="activity.id">
        {{activity.id}},{{activity.activity}}
      </div>
    </div>
  </div>
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
