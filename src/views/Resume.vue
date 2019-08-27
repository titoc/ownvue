<template>
  <div>
    <b-row align-h="end" class="mt-2 mb-2">
      <b-col cols="2" offset="10" align-self="end">
        <b-link
          download
          target="_blank"
          href="Tito_Cheriachan_Resume_Senior_Java_Developer.pdf"
        >Download Resume</b-link>
      </b-col>
    </b-row>
    <div class="row">
      <div class="col">
        <b-embed
          class="form-control border-0"
          type="iframe"
          aspect="16by9"
          :src="require('../assets/Tito_Cheriachan_Resume_Senior_Java_Developer.pdf')"
          allowfullscreen
        ></b-embed>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-control {
  border: 0;
  box-shadow: none;
}
</style>
