// pages/my-collection/my-collection.js
var utils = require('../../utils/util.js');
Page({

  data: {
    _index:0,
    barText:['我的收藏','我的点赞','浏览历史'],
    httpUrl: getApp().URL,
    type: [
    {
      'id': '我的收藏',
      'name': '我的收藏'
    },
    {
      'id': '我的点赞',
      'name': '我的点赞'
    },
    {
      'id': '浏览历史',
      'name': '浏览历史'
    }
    ],
    typeActive: 0, 
    category: [{
      'id': '0',
      'name': '校史网'
    },
    {
      'id': '1',
      'name': '年级史'
    }
    ],
    categoryActive: 0, 

    list: [], // 数据集合
    count: 10, // 总条数
    totalPage: 1, // 总页数
    first: 1, // 首页索引
    last: 1, // 尾页索引
    prev: 0, // 上一页索引值
    next: 2, // 下一页索引值
    pageNo: 1, // 当前页码 

    topic: '', // 栏目
    keyWord: '', // 关键字

    flag: true, // 标记是否是list追加数据（true）,刷新全部数据（false）
    loading: false,
    isDelete: false,
    deleteCount:0,
    selectList:[]
  },

  onLoad: function (options) {
    let {barText}=this.data
    console.log(options)
    this.setData({
      _index:options.index,
      typeActive:options.index,
    }),
    wx.setNavigationBarTitle({
      title: barText[options.index]
    })
    this.getAtrList(null); // 加载首页文章列表
    utils.addhits({
      type: '0', 
      pointId: 'gyxsg' // id
    }); // 点击量+1
  },
  lower() {
    if (!this.loading) {
      this.loadData();
    }
  },
  delete(){
    var that=this
    this.setData({
      isDelete:!that.data.isDelete
    })
  },
  checkboxChange(e){
    var that=this
    console.log(e)
    console.log('radio发生change事件，携带value值为：', e.detail.value+e.currentTarget.dataset.id)
    let {deleteCount,selectList}=this.data;
    if(!e.detail.value[0]){
      deleteCount--;
      let index=selectList.findIndex(item=>{
        item===e.currentTarget.dataset.id
      })
      selectList.splice(index,1)
    }else{
      deleteCount++;
      selectList.push(e.detail.value);
      console.info(selectList)
      that.setData({
        selectList
      })
    }
    this.setData({
      deleteCount
    })
  },
  clearAll(){
    var that=this
    wx.showModal({
      title: '温馨提示',
      content: '确认要清空吗？清空后将永远无法找回，请谨慎操作',
      confirmText: '清空',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.setData({
            list:'',
            isDelete:false,
            deleteCount:0,
            selectList:[]
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  clearSome(){
    let {list,selectList}=this.data
    for (var i=0; i<list.length; i++) {  
       for (var j=0; j<selectList.length; j++) {  
           if (list[i].id == selectList[j]) {  
               list.splice(i, 1);    
           }  
       }  
    }  
    this.setData({
      list,
      isDelete:false,
      deleteCount:0,
      selectList:[]
    })
  },
  loadData() {
    // 判断是不是最后一页
    if (this.data.pageNo == this.data.last) {
      return;
    }
    this.setData({
      pageNo: this.data.next,
      year: '',
      flag: true
    });
    this.getAtrList(null);
  },
  changeCategory(e) {
    this.setData({
      categoryActive: e.currentTarget.dataset.index
    });
    var k = this.data.categoryActive;
    this.getAtrList(null);
  },
  changeType(e) {
    let {barText}=this.data
    var index = e.currentTarget.dataset.index;
    var id = this.data.type[index].id;
    this.setData({
      typeActive: index,
      topic: id,
      year: '',
      pageNo: 1,
      flag: false
    });
    wx.setNavigationBarTitle({
      title: barText[index]
    })
    this.getAtrList(null);
  },
  search() {
    this.setData({
      flag: false // 重新加载
    });
    var para = {
      topic: this.data.topic,
      pageNo: this.data.pageNo,
      keyWord: this.data.keyWord,
      year: this.data.year,
      firstTopic: this.data.categoryActive
    };
    this.getAtrList(para);
  },
  binput(e) {
    this.setData({
      keyWord: e.detail.value
    });
  },
  toarticle(e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id,
    });
    this.setData({
      isDelete:false
    })
  },
  getAtrList(para) {
    let {
      list,
      count,
      totalPage,
      first,
      last,
      prev,
      next,
      pageNo
    } = this.data;
    wx.showLoading({
      title: '正在拼命加载...',
      mask: false
    });
    this.setData({
      loading: true
    });
    if (para == null) {
      para = {
        topic: this.data.topic,
        pageNo: this.data.pageNo,
        firstTopic: this.data.categoryActive
      };
    }

    var url = this.data.httpUrl + 'wx/index/init';
    wx.request({
      url: url,
      data: para,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // post 
        'cookie': wx.getStorageSync("cookie") //读取cookie
      },
      success: (res) => {
        console.log(res.data)
        var rData = res.data;
        if (rData != null && rData.page != null) {
          var page = rData.page;
          count = page.count;
          totalPage = page.totalPage;
          first = page.first;
          last = page.last;
          prev = page.prev;
          next = page.next;
          pageNo = page.pageNo;
          if (this.data.flag) {
            list.push(...rData.page.list);
          } else {
            list = rData.page.list;
          }
          this.setData({
            list,
            count,
            totalPage,
            first,
            last,
            prev,
            next,
            pageNo,
            loading: false
          });
        }
        wx.hideLoading();
      }
    });
  }

})