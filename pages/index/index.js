// pages/index/index.js
Page({
  data: {
    date: '2016',
    type:[
      {'0':'全部'},
      {'1':'学校人物'},
      {'2':'学校印记'},
      {'3':'学校荣誉'},
      {'4':'学校特色'}
    ],
    typeActive:0,
    category:[
      { '0':'校史网'},
      {'1':'年级史'}
    ],
    categoryActive:0,
    list:[],
    pageNo:'1',
    loading:false
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
    wx.showLoading({
      title: '正在拼命加载...',
      mask: false
    });
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
  toarticle(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id,
    })
  }

})