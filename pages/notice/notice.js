// pages/index/index.js
Page({
  data: {
    type: [{
      'id': '公告通知',
      'name': '公告通知'
    },
    {
      'id': '新闻动态',
      'name': '新闻动态'
    }
    ],
    typeActive:0,
    category: [{
      'id': '0',
      'name': '校史网'
    },
    {
      'id': '1',
      'name': '年级史'
    }
  ],
    categoryActive:0,
    list:[],
    pageNo:'1',
    loading:false,
    isSelect:false,
    isSelectType:true,
    typeIndex:0,
    TypeArray:['公告通知','新闻动态']
  },
  onLoad: function (options) {
    this.loadData();
  },
  lower(){
    if(!this.loading) {
      this.loadData();
    }
  },
  loadData(){
    let {list,pageNo}=this.data;
    // wx.showLoading({
    //   title: '正在拼命加载...',
    //   mask: false
    // });
    this.setData({
      loading: true
    });
    wx.request({
      url: `http://192.168.20.181:8080/school/wx/article/list?type=ts&pageNo=${this.data.pageNo}`,
      success: (res)=>{
        pageNo+=1;
        list.push(...res.data.data.page.list);
        this.setData({
          list,
          pageNo,
          loading:false
        })
        wx.hideLoading();
      }
    });
  },
  changeCategory(e){
    this.setData({
      categoryActive:e.currentTarget.dataset.index
    })
  },
  changeType(e){
    this.setData({
      typeActive:e.currentTarget.dataset.index
    })
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/notice-detail/notice-detail?id=' + e.currentTarget.dataset.id,
    })
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeIndex: e.detail.value
    })
  },

})