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
    class_index:0,
    studyInfo:[{
      id: 1,
      school:'北京大学',
      zye:'电子信息工程'
    },{
      id: 2,
      school:'师大附中',
      zye:''
    }],
    workInfo:[{
      id:1,
      name:'尚恩科技',
      zwei:'前端开发'
    },{
      id:2,
      name:'腾讯',
      zwei:'前端开发'
    }]
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

  goAdd(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/add-education/add-education'
    })
  },
  deleAdd(e) {
    console.log(e)
    var _index=e.currentTarget.dataset.index;
    let studyInfo=this.data.studyInfo;
    studyInfo.splice(_index,1)
    this.setData({
      studyInfo
    })
  },
  goAddwork(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/add-work/add-work'
    })
  },
  deleAddwork(e) {
    console.log(e)
    var _index=e.currentTarget.dataset.index;
    let workInfo=this.data.workInfo;
    workInfo.splice(_index,1)
    this.setData({
      workInfo
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