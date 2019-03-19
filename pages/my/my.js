//获取应用实例
const app = getApp()

Page({
  onLoad: function () {

  },

  goEdit(){
    wx.navigateTo({
      url: '/pages/register/register',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  goFabu(){
    wx.navigateTo({
      url: '/pages/publish/publish',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  goCollection(e){
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '/pages/my-collection/my-collection?index='+e.currentTarget.dataset.index,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    })
  },
  goFriend(){
    wx.navigateTo({
      url: '/pages/my-school-friend/my-school-friend',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    })
  },
  goGroup(){
    wx.navigateTo({
      url: '/pages/group/group',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    })
  }

})
