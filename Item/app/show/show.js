// require("../commons/reset.css");
import reset from '../commons/reset.css'
import jQ from '../commons/jquery-3.0.0.min.js'
// import swipercss from '../commons/swiper.min.css'
// import swiperjs from '../commons/swiper.min.js'
// var Vue = require("vue");
// var App = require("./app");
import Vue from 'vue'
import App from './app'
new Vue({
  el: 'body',
  components: { App }
})
