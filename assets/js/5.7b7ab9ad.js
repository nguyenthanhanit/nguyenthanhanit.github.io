(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(n,t,i){},305:function(n,t,i){"use strict";i(301)},311:function(n,t,i){"use strict";i.r(t);i(9),i(87);var s=i(299),a=i.n(s),e={name:"Spotify",data:function(){return{song:"",artist:"",is_playing:!1}},mounted:function(){this.getSongPlaying()},methods:{getSongPlaying:function(){var n=this;fetch("https://still-woodland-24462.herokuapp.com/spotify/playing").then((function(n){return n.json()})).then((function(t){return n.setInfo(t)})).catch((function(n){return console.log(n)}))},setInfo:function(n){var t=n.item,i=n.is_playing;this.song=t.name,this.artist=a.a.get(t,["artists",0,"name"]),this.is_playing=i}}},o=(i(305),i(42)),c=Object(o.a)(e,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return n.song&&n.is_playing?i("div",[i("i",{staticClass:"fas fa-headphones-alt animate-bounce"}),n._v(" "+n._s(n.song)+" - "+n._s(n.artist)+" "),i("i",{staticClass:"fab fa-spotify",class:n.is_playing?"animate-spin":""})]):n._e()}),[],!1,null,"63c2d744",null);t.default=c.exports}}]);