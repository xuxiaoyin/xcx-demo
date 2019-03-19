// pages/add-group-detail/add-group-detail.js
var utils = require('../../utils/util.js');
Page({
  data: {
    index: 0,
    array: ['同学群','自由群','定时解散群'],
    date: '',
    Img:''
  },

  onLoad: function (options) {
    var date=utils.tsFormatTime(new Date(),'Y-M-D')
    this.setData({
      date
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  chooseImg() {
    var that=this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          Img: tempFilePaths
        })
      }
    })
  },

  sure() {
    wx.navigateTo({
      url: '/pages/group/group',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  cancel() {
    wx.navigateTo({
      url: '/pages/add-group/add-group',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

})