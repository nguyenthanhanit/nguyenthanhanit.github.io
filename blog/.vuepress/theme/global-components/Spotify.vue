<template>
  <div  v-if="song">
    <i class="fab fa-spotify animate-spin"></i>{{ song }} - {{ artist }}
  </div>
</template>

<script>
export default {
  name: "Spotify",
  data() {
    return {
      song: '',
      artist: ''
    }
  },
  created: function () {
    this.getSongPlaying()
  },
  methods: {
    getSongPlaying() {
      fetch('https://still-woodland-24462.herokuapp.com/spotify/playing')
          .then(res => res.json())
          .then(data => console.log(data)).catch(e => console.log(e))
    },
  }
}
</script>

<style scoped lang="stylus">
.fa-spotify
  color #1DB954
</style>