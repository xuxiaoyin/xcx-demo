// pages/publish-add/publish-add.js
Page({

  data: {
    type: ['请选择发布类型','学校人物','学校印记','学校荣誉','学校特色'],
    typeIndex: 0,
    date:'2019',
    pics: [],
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isShow: true
  },

  onLoad: function (options) {
    isShow: (options.isShow == "true" ? true : false)
  },
  bindPickerChange(e){
    this.setData({
      typeIndex: e.detail.value
    })
  },
  bindDateChange(e){
    this.setData({
      date: e.detail.value
    })
  },
  chooseImage: function () {
    var _this = this,
      pics = this.data.pics;
    wx.chooseImage({
      count: 9 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var imgSrc = res.tempFilePaths;
        pics = pics.concat(imgSrc);
        // 控制触发添加图片的最多时隐藏
        if (pics.length >= 9) {
          _this.setData({
            isShow : (!_this.data.isShow)
          })   
        }else {
          _this.setData({
            isShow: (_this.data.isShow)
          })  
        }
        _this.setData({
          pics: pics
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.pics
    })
  },

  formSubmit(e){
    console.log(e.detail)
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
  },

  formReset() {
    console.log('form发生了reset事件')
  }

})