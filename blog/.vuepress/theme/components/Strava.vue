<template>
  <div>
    <p class="ordinal inline">{{ `${distance}km` }}</p> trong {{ new Date().getFullYear() }}
<!--    <Modal :open="showModal"/>-->
  </div>
</template>

<script>
import {stravaConfig} from "../../stravaConfig";
import Modal from "./Modal";

export default {
  name: "Strava",
  components: {
    Modal
  },
  data() {
    return {
      distance: 318.6,
      showModal: false
    }
  },
  created: function () {
    if (!this.distance) {
      // this.refresh();
    }
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
    },

    // showInfo() {
    //   this.showModal = !this.showModal;
    // }
  }
}
</script>