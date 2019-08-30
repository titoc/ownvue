<template>
  <div>
    <div class="row mt-5">
      <div class="col">
        <div>
          <h4>Scan this QR Code for VCard</h4>
          <b-img
            fluid
            class="d-inline-block align-top"
            v-bind="mainProps"
            :src="require('../assets/images/qr-code.png')"
            alt="Circle image"
          />
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="row mt-1">
          <div class="col">
            <a href="https://github.com/titoc" class="card-link darklink" target="_blank">
              <i class="fa fa-github" style="font-size:25px">
                <span class="ml-2">GitHub</span>
              </i>
            </a>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col">
            <a
              href="https://stackoverflow.com/users/441902/cherit"
              class="card-link darklink"
              target="_blank"
            >
              <i class="fa fa-stack-overflow" style="font-size:25px">
                <span class="ml-2">StackOverflow</span>
              </i>
            </a>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <a href="https://www.linkedin.com/in/chetio" class="card-link darklink" target="_blank">
              <i class="fa fa-linkedin-square" style="font-size:25px">
                <span class="ml-2">LinkedIn</span>
              </i>
            </a>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <a href="#" class="card-link darklink" target="_blank">
              <i class="fa fa-phone" style="font-size:25px">
                <span class="ml-2">(450)540-1987</span>
              </i>
            </a>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <a href="#" class="card-link darklink" target="_blank">
              <i class="fa fa-envelope" style="font-size:25px">
                <span class="ml-2">titomc@gmail.com</span>
              </i>
            </a>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <a href="#" class="card-link darklink" target="_blank">
              <i class="fa fa-map-marker" style="font-size:25px">
                <span class="ml-2">Montreal, Canada</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainProps: {
        blank: false,
        blankColor: "#777",
        width: 150,
        height: 150,
        class: "m1"
      }
    };
  }
};
</script>
<style scoped>
.darklink {
  color: #000 !important;
}
</style>

