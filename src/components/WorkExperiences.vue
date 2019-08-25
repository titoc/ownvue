<template>
  <div>
    <div class="row">
      <div class="col">
        <b-card title="Tito Cheriachan" sub-title="Bachelor of Computer Science and Engineering">
          <b-card-text>
            Specialized primarily in Java backend development, I am currently working as Senior Java Developer in Montreal, Canada.
            Prior to this, I was working in American Express in Arizona, USA building microservices for AMEX card member's account summary page.
            The account summary APIs receives an average of 4 million requests in any given day.
            I have also worked in Connected Car IOT platform in which I programmed daemons which runs in the telematic unit of Chrysler cars.
            The daemons reads CAN Bus data from the car and sends it to the cloud.
          </b-card-text>
          <b-card-text>Here are some of the technologies and skills that I work with:</b-card-text>
        </b-card>
      </div>
    </div>
    <div class="row" v-for="experience in experiences" v-bind:key="experience.id">
      <div class="col">
        <div class="mt-2 mb-2">
          <b-card
            border-variant="primary"
            :title="experience.name"
            :sub-title="experience.designation+` ,
            `+experience.from.year+`/`+experience.from.month+` - `
            +experience.to.year+`/`+experience.to.month"
          >
            <b-card-text>
              <ul>
                <div v-for="activity in experience.activities" v-bind:key="activity.id">
                  <li>{{activity.activity}}</li>
                </div>
              </ul>
            </b-card-text>

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
