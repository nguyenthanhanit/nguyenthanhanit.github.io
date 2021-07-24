<template>
  <div>
    <p class="ordinal inline">{{ `${distance}km` }}</p>
    <p class="inline">trong năm {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
import {stravaConfig} from "../../stravaConfig";

export default {
  name: "Strava",
  data() {
    return {
      distance: 0,
    }
  },
  created: function () {
    this.refresh();
  },
  methods: {
    // Use refresh token to get current access token
    refresh() {
      let api = `${stravaConfig.refresh_uri}&client_id=${stravaConfig.client_id}&client_secret=${stravaConfig.client_secret}&refresh_token=${stravaConfig.refresh_token}`
      fetch(api, {
        method: 'POST'
      }).then(res => res.json()).then(result => this.getActivities(result.access_token))
    },

    // use current access token to call all activities
    getActivities(access) {
      fetch(stravaConfig.profile_uri + access).then(res => res.json()).then(data => this.distance = (data.ytd_run_totals.distance / 1000).toFixed(1)).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>