// require("../commons/reset.css");
import reset from '../commons/reset.css';
import swipercss from '../commons/swiper.min.css'
import swiperjs from '../commons/swiper.min.js'
// import muicss from '../commons/mui.min.css'
import muijs from '../commons/mui.min.js'
// var Vue = require("vue");
// var App = require("./app");
import Vue from 'vue'
import App from './app'
new Vue({
  el: 'body',
  components: { App }
})
