<template>
  <div v-if="distance">
    <a href="https://www.strava.com/athletes/72492756" target="_blank" class="underline">
      <i class="fab fa-strava"></i> {{ distance }}km trong năm {{ new Date().getFullYear() }}
    </a>
  </div>
</template>

<script>

export default {
  name: "Strava",
  data() {
    return {
      distance: 0
    }
  },
  mounted: function () {
    this.getActivities()
  },
  methods: {
    getActivities() {
      fetch('https://still-woodland-24462.herokuapp.com/strava/stats')
          .then(res => res.json())
          .then(data => this.distance = (data.ytd_run_totals.distance / 1000).toFixed(1))
          .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped lang="stylus">
.fa-strava
  color orange
</style>