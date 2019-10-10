<template>
<div>
  <div class="row mt-2">
    <div class="col">
      <b-card title="OwnVue" sub-title="A handcoded personal website">
        <b-card-text>
          OwnVue is a handcoded personal website made with Vuejs, BootstrapVue and TypeScript.
          I am doing this as a part of my UI learning process. Infact, this site itself is made with OwnVue.
          You are free to use the source of this site to roll your own personal site.
          <b-link
            href="https://github.com/titoc/ownvue"
            class="card-link"
            target="_blank"
          >Github Repo</b-link>
        </b-card-text>
        <b-badge class="mr-2" variant="success">VueJS</b-badge>
        <b-badge class="mr-2" variant="success">BootstrapVue</b-badge>
        <b-badge class="mr-2" variant="success">TypeScript</b-badge>
        <b-badge class="mr-2" variant="success">Netlify</b-badge>
      </b-card>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col">
      <b-card title="DailyTweetAlerts" sub-title="A free web based service which sends alert emails when it finds particular keywords of your interests on twitter.">
        <b-card-text>
          This web application uses VueJS for the UI, Firebase for Twitter OAuth, Kafka and Spring Boot at the backend.
          Kafka is used for processing a large number of tweets and for filtering out the irrelevant ones.
          <b-link
            href="https://www.dailytweetalerts.com"
            class="card-link"
            target="_blank"
          >DailyTweetAlerts</b-link>
        </b-card-text>
        <b-badge class="mr-2" variant="success">VueJS</b-badge>
        <b-badge class="mr-2" variant="success">SpringBoot</b-badge>
        <b-badge class="mr-2" variant="success">Kafka</b-badge>
        <b-badge class="mr-2" variant="success">Netlify</b-badge>
        <b-badge class="mr-2" variant="success">Firebase</b-badge>
      </b-card>
    </div>
  </div>
 </div>
</template>
