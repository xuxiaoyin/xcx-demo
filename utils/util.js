// 公共JS

module.exports = {
  formatTime: formatTime,
  login: login,
  tsFormatTime: tsFormatTime,
  addhits: addhits,
  removeLocalSession: removeLocalSession,
  checkSessionTimeout: checkSessionTimeout,
  getCookieByKey: getCookieByKey
}

const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * timestamp: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 * utils.tsFormatTime(rd.art.publishdate, 'Y-M-D h:m');
 */
function tsFormatTime(timestamp, format) {
  const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let returnArr = [];
  let date = new Date(timestamp);
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  returnArr.push(year, month, day, hour, minute, second);
  returnArr = returnArr.map(formatNumber);
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
 * 登录请求
 */
function login(paras) {
  var url = getApp().URL + 'wx/user/login'; //接口地址 
  wx.request({
    url: url,
    data: paras,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded', // post 
      'cookie': wx.getStorageSync("cookie") //读取cookie
    },
    success: function(res) {
      var cookie = res.header["Set-Cookie"]; // 服务器存入的cookie
      wx.setStorageSync('cookie', cookie); // cookie存入缓存 同步存入
      wx.setStorageSync('timeOut', res.data.timeOut); // 过期时间戳
      if (res.data == null || res.data == '') {
        return;
      }
      if (res.data.status == 200) {
        wx.setStorageSync('userInfo', res.data.user); // 用户信息存入缓存 同步存入
        wx.switchTab({
          url: '/pages/index/index'
        }); // 跳转首页
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000,
          mask: true
        });
      }
    },
    fail: function(err) {
      wx.showToast({
        title: err.errMsg,
        icon: 'none',
        duration: 2000,
        mask: true
      });
    }
  });
}

/**
 * 点击量+1
 */
function addhits(para) {
  var url = getApp().URL + 'wx/hits/add'
  wx.request({
    url: url,
    data: para,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded', // post 
      'cookie': wx.getStorageSync("cookie") //读取cookie
    },
    success: (res) => {
      // console.log(res.data);
    }
  });
}

/**
 * 过期后清除session缓存
 */
function removeLocalSession() {
  wx.removeStorageSync('cookie');
  wx.removeStorageSync('timeOut');
  wx.removeStorageSync('userInfo');
}

/**
 * 检查sessionid是否过期的方法
 */
function checkSessionTimeout() {
  var sessionTime = wx.getStorageSync('timeOut');
  if (sessionTime == null || sessionTime == undefined || sessionTime == "") {
    console.log("session:empty");
    return false;
  }
  var aftertimestamp = Date.parse(new Date());
  if (aftertimestamp - sessionTime >= 0) {
    console.log("session:false");
    removeLocalSession();
    return false;
  }
  console.log("session:true");
  console.log('sessionTime:' + tsFormatTime(sessionTime, 'Y-M-D h:m:s'));
  return true;
}

function getCookieByKey(name, keys) {
  if (name == null || name == '') {
    return '';
  }
  var str = '';
  var cookie = wx.getStorageSync("cookie");
  cookie = unescape(decodeURI(cookie)); // 解码
  var arr = cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(name + '=') > -1) {
      if (keys == null || keys == '') {
        return arr[i];
      } else {
        var val = arr[i].split(name + '=');
        if (val.length < 2 || val[1] == null || val[1] == '') {
          return '';
        }
        var arrVal = val[1].split(',');
        for (var j = 0; j < arrVal.length; j++) {
          var v = arrVal[j].split('&');
          for (var k = 0; k < v.length; k++) {
            var arrV = v[k].split('=');
            if (arrV[0] == keys) {
              str += arrV[1] + ',';
            }
          }
        }
      }
    }
  }
  if (str.length > 0) {
    str = str.substring(0, str.length - 1);
  }
  return str;
}