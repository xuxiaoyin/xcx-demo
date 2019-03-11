//app.js
var utils = require('/utils/util.js');

App({
  onLaunch: function () {
    utils.checkSessionTimeout();
  },
  onShow: function () {
    // console.log('App onShow1' + this.NAME);
  },
  onHide: function () {
    // console.log('App onHide');
  },
  onError: function () {
    console.log('App onError');
  },
  URL: 'http://192.168.20.181:8080/school/',
  NAME: '校史网'
})