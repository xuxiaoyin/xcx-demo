// pages/publish/publish.js
Page({

  data: {
    typeActive:0,
    type: [{
      'id': '已发布',
      'name': '已发布'
    },
    {
      'id': '审核',
      'name': '审核'
    },
    {
      'id': '草稿',
      'name': '草稿'
    }]

  },

  onLoad: function (options) {

  },
  changeType(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      typeActive:index
    })
  },
  toArticle(){
    wx.navigateTo({
      url: '/pages/article/article',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  edite(){
    wx.navigateTo({
      url: '/pages/publish-add/publish-add',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  delete(){
    wx.showModal({
      title: '确定删除吗？',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          console.log('确定')
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

})