<template>
  <div id="right">
    <h1>Lebenslauf</h1>
    <div v-for="(experience, part) in experiences" class="segment" id="berufe"
         :key="experience.id">
      <div :class="part">
        <div class="ui divider"></div>
        <h2>{{ experience.name }}</h2>
        <!--<div class="ui divider"></div>-->
      </div>
      <job v-for="(job, index) in experience.data" :title="job.name" :subtitle="job.institution" :time="job.time"
           :key="job.id" :index="index" :text="job.text" :color="getColor" v-if="job.show"></job>
    </div>
    <div class="page-break"></div>
  </div>
</template>
<script>
  import Job from '@/components/Job/Job'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'experience-side',
    components: {
      job: Job
    },
    computed: {
      ...mapGetters(['getColor', 'getDarkerColor', 'getLinkColor']),
      ...mapState({
        experiences: state => state.resume.experience
      })
    }
  }
</script>
<style lang="sass" scoped>
h1
  padding-top: 15px
  font-size: 2.2rem
h2
  padding-bottom: 15px;
@media print
  #berufe
    page-break-inside: avoid
  .education > .ui.divider
    display: none
</style>
