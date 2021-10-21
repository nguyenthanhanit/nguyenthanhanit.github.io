<template>
  <div v-if="song && is_playing">
    <i class="fas fa-headphones-alt animate-bounce"></i> {{ song }} - {{ artist }} <i class="fab fa-spotify" :class="is_playing ? 'animate-spin' : ''"></i>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Spotify",
  data() {
    return {
      song: '',
      artist: '',
      is_playing: false
    }
  },
  mounted: function () {
    this.getSongPlaying()
  },
  methods: {
    getSongPlaying() {
      fetch('https://still-woodland-24462.herokuapp.com/spotify/playing')
          .then(res => res.json())
          .then(data => this.setInfo(data))
          .catch(e => console.log(e))
    },
    setInfo(data) {
      const {item, is_playing} = data;
      this.song = item.name;
      this.artist = _.get(item, ['artists', 0, 'name']);
      this.is_playing = is_playing;
    }
  }
}
</script>

<style scoped lang="stylus">
.fa-spotify
  color #1DB954
</style>