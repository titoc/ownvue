<template>
  <div>
    <h3>Resume</h3>
    <WorkExperiences />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import WorkExperiences from "@/components/WorkExperiences.vue"; // @ is an alias to /src

@Component({
  components: {
    WorkExperiences
  }
})
export default class Resume extends Vue {}
</script>
