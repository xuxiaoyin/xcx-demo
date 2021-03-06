// pages/index/index.js
var utils = require('../../utils/util.js');

Page({
  data: {
    httpUrl: getApp().URL,
    date: '2018', // 年代
    mode:'date',
    isSelect:true,
    isSelectType:false,
    type: [{
      'id': '全部',
      'name': '全部'
    },
    {
      'id': '学校人物',
      'name': '学校人物'
    },
    {
      'id': '学校印记',
      'name': '学校印记'
    },
    {
      'id': '学校荣誉',
      'name': '学校荣誉'
    },
    {
      'id': '学校特色',
      'name': '学校特色'
    }
    ],
    typeActive: 0, // 栏目切换下标，默认0-全部
    category: [{
      'id': '0',
      'name': '校史网'
    },
    {
      'id': '1',
      'name': '年级史'
    }
    ],
    categoryActive: 0, // 一级标题，校史网，年级史，切换下标

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
    loading: false
  },

  /**
   * 初始化
   */
  onLoad: function (options) {
    //this.loadData();
    this.getAtrList(null); // 加载首页文章列表
    utils.addhits({
      type: '0', // 类型（0:网站，1：校史，2：大事记，3：校友圈，4：年级校史）
      pointId: 'gyxsg' // id
    }); // 点击量+1
  },

  /**
   * 下拉加载更多
   */
  lower() {
    if (!this.loading) {
      this.loadData();
    }
  },

  /**
   * 下拉加载更多-获取数据
   */
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

  /**
   * 校史，年级史切换
   */
  changeCategory(e) {
    this.setData({
      categoryActive: e.currentTarget.dataset.index
    });
    var k = this.data.categoryActive;
    if (k == 0) {
      this.setData({
        category: [{
          'id': '0',
          'name': '校史网'
        },
        {
          'id': '1',
          'name': '年级史'
        }
        ],
        type: [{
          'id': '全部',
          'name': '全部'
        },
        {
          'id': '学校人物',
          'name': '学校人物'
        },
        {
          'id': '学校印记',
          'name': '学校印记'
        },
        {
          'id': '学校荣誉',
          'name': '学校荣誉'
        },
        {
          'id': '学校特色',
          'name': '学校特色'
        }
        ]
      });
    } else {
      var gid = utils.getCookieByKey('gradeInfo', 'id');
      console.log(gid);
    }
    this.getAtrList(null);
  },

  /**
   * 栏目切换
   */
  changeType(e) {
    var index = e.currentTarget.dataset.index;
    var id = this.data.type[index].id;
    this.setData({
      typeActive: index,
      topic: id,
      year: '',
      pageNo: 1,
      flag: false
    });
    this.getAtrList(null);
  },

  /**
   * 搜索
   */
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

  /**
   * 搜索框输入监听事件
   */
  binput(e) {
    this.setData({
      keyWord: e.detail.value
    });
  },

  /**
   * 文章详情页跳转
   */
  toarticle(e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id,
    });
  },

  /**
   * 时间选择
   */
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  /**
   * 请求数据集
   */
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
      mask: true
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