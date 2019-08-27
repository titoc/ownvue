<template>
  <div class="row">
    <div class="col">
      <WorkExperiences />
    </div>
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
export default class Home extends Vue {}
</script>
