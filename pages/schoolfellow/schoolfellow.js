// pages/schoolfellow/schoolfellow.js
Page({
  data: {
    list: [
      { 
        'listId': 1,
        'avtor':'/assets/images/icon-info.png',
        'name':'消息盒子',
        'time':'16:58',
        'newSum':'1',
        'lastMsg':'今天雨好大'
      },
      {
        'listId': 2,
        'avtor': '',
        'name': '张三',
        'time': '16:58',
        'newSum': '10',
        'lastMsg': '今天雨好大'
      },
      {
        'listId': 3,
        'avtor': '/assets/images/author.jpg',
        'name': '张三',
        'time': '16:58',
        'newSum': '100',
        'lastMsg': '今天雨好大'
      },
      {
        'listId': 4,
        'avtor': '/assets/images/author.jpg',
        'name': '张三',
        'time': '16:58',
        'newSum': '',
        'lastMsg': '今天雨好大今天雨好大今天雨好大今天雨好大今天雨好大今天雨好大今天雨好大'
      }
    ],
    defaultAvtor:'/assets/images/icon-normal.png'
  },
  onLoad: function (options) {

  },
  
  handleDeleteList(e) {
    console.log(e)
    var _id=e.currentTarget.dataset.id;
    let list=this.data.list;
    //let _index=list.findIndex(item=>{item.listId=_id})
    list.splice(_id,1);
    this.setData({
      list
    });
  }

})