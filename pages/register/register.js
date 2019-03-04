// pages/register/register.js
Page({

  data: {
    _src:'',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    region1: ['广东省', '广州市', '海珠区'],
    customItem1: '全部',
    sex:[
      {
        'id':1,
        'name': '男',
        'value': 1,
        checked: 'true'
      },
      {
        'id':2,
        'name': '女',
        'value': 2
      },
    ],
    date:'2019-01-01',
    date1:'2019-01-01',
    date2:'2019-01-01',
    studyCount:0,
    stage: ['初中','高中'],
    stage_index:0,
    stage1: ['番禺校区','白云校区'],
    stage_index1:0,
    class:['一年级','二年级','三年级'],
    class_index:0
  },

  onLoad: function (options) {

  },

  chooseImg() {
    var _this=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        _this.setData({
          _src:tempFilePaths
        })
      }
    })
  },

  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  bindRegionChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region1: e.detail.value
    })
  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindDateChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },

  bindDateChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },

  goAdd() {
    let count=this.data.studyCount
    count++
    this.setData({
      studyCount:count
    })
    
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      stage_index: e.detail.value
    })
  },
  bindPickerChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      stage_index1: e.detail.value
    })
  },
  bindPickerChangeClass(e) {
    this.setData({
      class_index: e.detail.value
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }

})