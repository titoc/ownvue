<template>
  <div>
    <div class="row" v-for="experience in experiences" v-bind:key="experience.id">
      <div class="col">
        <div class="mt-2 mb-2">
          <b-card
            border-variant="primary"
            img-top
            :title="experience.name"
            :sub-title="experience.designation+` , `+experience.from.year+`/`+experience.from.month+` - `+experience.to.year+`/`+experience.to.month"
          >
            <b-card-text>
              <b-img
                left
                rounded="circle"
                src="https://picsum.photos/125/125/?image=58"
                alt="Circle image"
              />
              ID: {{experience.id}}
              Logo: {{experience.logo}}
            </b-card-text>
            <div v-for="activity in experience.activities" v-bind:key="activity.id">
              <b-card-text>{{activity.id}},{{activity.activity}}</b-card-text>
            </div>
            <span v-for="skill in experience.skills" v-bind:key="skill">
              <b-badge class="mr-2" variant="success">{{skill}}</b-badge>
            </span>
            <div>
              <b-link :href="experience.companyLink" class="card-link">{{experience.companyLink}}</b-link>
            </div>
          </b-card>
        </div>
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
