// pages/add-friend/add-friend.js
Page({
  data: {
    list:[
      {
        friendID:'1',
        friendImg:'/assets/images/author.jpg',
        friendName:'班级群'
      },
      {
        friendID:'2',
        friendImg:'/assets/images/author.jpg',
        friendName:'聊天群'
      },
      {
        friendID:'3',
        friendImg:'/assets/images/author.jpg',
        friendName:'王五'
      },
      {
        friendID:'4',
        friendImg:'/assets/images/author.jpg',
        friendName:'A王五'
      },
      {
        friendID:'5',
        friendImg:'/assets/images/author.jpg',
        friendName:'张'
      },
      {
        friendID:'6',
        friendImg:'/assets/images/author.jpg',
        friendName:'陈'
      },
      {
        friendID:'7',
        friendImg:'/assets/images/author.jpg',
        friendName:'李'
      },
      {
        friendID:'8',
        friendImg:'/assets/images/author.jpg',
        friendName:'杨'
      },
      {
        friendID:'9',
        friendImg:'/assets/images/author.jpg',
        friendName:'杨二'
      },
      {
        friendID:'10',
        friendImg:'/assets/images/author.jpg',
        friendName:'黄'
      },
      {
        friendID:'11',
        friendImg:'/assets/images/author.jpg',
        friendName:'刘'
      },
      {
        friendID:'12',
        friendImg:'/assets/images/author.jpg',
        friendName:'赵'
      },
      {
        friendID:'13',
        friendImg:'/assets/images/author.jpg',
        friendName:'吴'
      },
      {
        friendID:'14',
        friendImg:'/assets/images/author.jpg',
        friendName:'郑'
      },
      {
        friendID:'15',
        friendImg:'/assets/images/author.jpg',
        friendName:'林'
      },
      {
        friendID:'16',
        friendImg:'/assets/images/author.jpg',
        friendName:'朱'
      },
      {
        friendID:'17',
        friendImg:'/assets/images/author.jpg',
        friendName:'徐'
      },
      {
        friendID:'18',
        friendImg:'/assets/images/author.jpg',
        friendName:'孙'
      },
      {
        friendID:'19',
        friendImg:'/assets/images/author.jpg',
        friendName:'周'
      },
      {
        friendID:'20',
        friendImg:'/assets/images/author.jpg',
        friendName:'何'
      }
    ],
    addFriend: false
  },

  onLoad: function (options) {

  },

  goDetail(e){
    wx.navigateTo({
      url: '/pages/group-detail/group-detail?id',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

})