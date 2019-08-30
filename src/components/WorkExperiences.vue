<template>
  <div>
    <div class="row">
      <div class="col">
        <b-card title="Tito Cheriachan" sub-title="Bachelor of Computer Science and Engineering">
          <b-card-text>
            Specialized primarily in Java backend development with various libraries & frameworks including Spring, I am currently working as Senior Java Developer in Montreal, Canada.
            Prior to this, I was working at American Express in Arizona, building microservices for AMEX card member's account summary page.
            I have also worked in Connected Car IOT platform called 'Sprint Velocity' in which I wrote daemon apps which runs in the telematic unit of Chrysler cars.
            The daemons reads CAN Bus data from the car and sends it to the cloud. Lately, I am building UI with VueJS. This site is made with VueJS and Typescript.
            You can find the source code of this site
            <a
              target="_blank"
              href=" https://github.com/titoc/ownvue"
            >here</a> and you are free to use it.
          </b-card-text>
          <a href="https://github.com/titoc" class="card-link darklink" target="_blank">
            <i class="fa fa-github" style="font-size:25px"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/441902/cherit"
            class="card-link darklink"
            target="_blank"
          >
            <i class="fa fa-stack-overflow" style="font-size:25px"></i>
          </a>
          <a href="https://www.linkedin.com/in/chetio" class="card-link darklink" target="_blank">
            <i class="fa fa-linkedin-square" style="font-size:25px"></i>
          </a>
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
            `+experience.from.year+` `+experience.from.month+` - `
            +experience.to.year+` `+experience.to.month"
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
              <b-link
                :href="experience.companyLink"
                target="_blank"
                class="card-link"
              >{{experience.companyLink}}</b-link>
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
    this.service = new EmployerService();
    this.experiences = this.service.getWorkExperiences();
  }
}
</script>

<style scoped>
.darklink {
  color: #000 !important;
}
</style>

