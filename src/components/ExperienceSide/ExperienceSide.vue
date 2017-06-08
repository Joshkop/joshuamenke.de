<template>
  <div id="right">
    <div v-for="(experience, part) in experiences" class="segment" id="berufe"
         :key="experience.id">
      <div :class="part">
        <div class="ui divider"></div>
        <h2>{{ experience.name }}</h2>
        <div class="ui divider"></div>
      </div>
      <job v-for="(job, index) in experience.data" :title="job.name" :subtitle="job.institution" :time="job.time"
           :key="job.id" :index="index" :text="job.text" :color="getColor"></job>
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
<style lang="sass">
@media print
  #berufe
    page-break-inside: avoid
</style>
