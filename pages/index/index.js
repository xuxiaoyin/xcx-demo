// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindDateChange(e) {
    this.setData({
      date:e.detail.value
    })
  }
})