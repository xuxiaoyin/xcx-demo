// pages/add-education/add-education.js
Page({
  data: {
    date: '2015-09-01',
    date2:'2018-01-24',
    array:['请选择学历','初中及以下','高中','大专','本科','硕士','博士及以上'],
    index:0
  },

  bindDateChange(e){
    let that=this;
    console.log(e.detail.value)
    that.setData({
      date: e.detail.value,
    })
  },
  bindDateChange2(e){
    let that=this;
    that.setData({
      date2: e.detail.value,
    })
  },
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.navigateBack({
      delta: e.detail.value
    })
  },
  formReset() {
    console.log('form发生了reset事件')
  }

})