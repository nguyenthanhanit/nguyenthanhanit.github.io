(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(n,t,i){},304:function(n,t,i){"use strict";i(301)},306:function(n,t,i){"use strict";i.r(t);i(9),i(87);var s=i(299),a=i.n(s),o={name:"Spotify",data:function(){return{song:"",artist:"",is_playing:!1}},mounted:function(){this.getSongPlaying()},methods:{getSongPlaying:function(){var n=this;fetch("https://still-woodland-24462.herokuapp.com/spotify/playing").then((function(n){return n.json()})).then((function(t){return n.setInfo(t)})).catch((function(n){return console.log(n)}))},setInfo:function(n){var t=n.item,i=n.is_playing;this.song=t.name,this.artist=a.a.get(t,["artists",0,"name"]),this.is_playing=i}}},e=(i(304),i(42)),c=Object(e.a)(o,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return n.song&&n.is_playing?i("div",[i("i",{staticClass:"fab fa-spotify",class:n.is_playing?"animate-spin":""}),n._v(" "+n._s(n.song)+" - "+n._s(n.artist)+"\n")]):n._e()}),[],!1,null,"6e452a42",null);t.default=c.exports}}]);