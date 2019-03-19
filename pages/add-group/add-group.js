// pages/my-school-friend/my-school-friend.js
Page({
  data: {
    type: [
    {
      'id': '好友',
      'name': '好友'
    },
    {
      'id': '同学',
      'name': '同学'
    }
    ],
    typeActive: 0,
    list:[
      {
        friendID:'1',
        friendImg:'/assets/images/author.jpg',
        friendName:'张三',
        Findex:'Z'
      },
      {
        friendID:'2',
        friendImg:'/assets/images/author.jpg',
        friendName:'李四',
        Findex:'L'
      },
      {
        friendID:'3',
        friendImg:'/assets/images/author.jpg',
        friendName:'王五',
        Findex:'W'
      },
      {
        friendID:'4',
        friendImg:'/assets/images/author.jpg',
        friendName:'A王五',
        Findex:'A'
      },
      {
        friendID:'5',
        friendImg:'/assets/images/author.jpg',
        friendName:'张',
        Findex:'Z'
      },
      {
        friendID:'6',
        friendImg:'/assets/images/author.jpg',
        friendName:'陈',
        Findex:'C'
      },
      {
        friendID:'7',
        friendImg:'/assets/images/author.jpg',
        friendName:'李',
        Findex:'L'
      },
      {
        friendID:'8',
        friendImg:'/assets/images/author.jpg',
        friendName:'杨',
        Findex:'Y'
      },
      {
        friendID:'9',
        friendImg:'/assets/images/author.jpg',
        friendName:'杨二',
        Findex:'Y'
      },
      {
        friendID:'10',
        friendImg:'/assets/images/author.jpg',
        friendName:'黄',
        Findex:'H'
      },
      {
        friendID:'11',
        friendImg:'/assets/images/author.jpg',
        friendName:'刘',
        Findex:'L'
      },
      {
        friendID:'12',
        friendImg:'/assets/images/author.jpg',
        friendName:'赵',
        Findex:'Z'
      },
      {
        friendID:'13',
        friendImg:'/assets/images/author.jpg',
        friendName:'吴',
        Findex:'W'
      },
      {
        friendID:'14',
        friendImg:'/assets/images/author.jpg',
        friendName:'郑',
        Findex:'Z'
      },
      {
        friendID:'15',
        friendImg:'/assets/images/author.jpg',
        friendName:'林',
        Findex:'L'
      },
      {
        friendID:'16',
        friendImg:'/assets/images/author.jpg',
        friendName:'朱',
        Findex:'Z'
      },
      {
        friendID:'17',
        friendImg:'/assets/images/author.jpg',
        friendName:'徐',
        Findex:'X'
      },
      {
        friendID:'18',
        friendImg:'/assets/images/author.jpg',
        friendName:'孙',
        Findex:'S'
      },
      {
        friendID:'19',
        friendImg:'/assets/images/author.jpg',
        friendName:'周',
        Findex:'Z'
      },
      {
        friendID:'20',
        friendImg:'/assets/images/author.jpg',
        friendName:'何',
        Findex:'H'
      },
      {
        friendID:'21',
        friendImg:'/assets/images/author.jpg',
        friendName:'郭',
        Findex:'G'
      },
      {
        friendID:'22',
        friendImg:'/assets/images/author.jpg',
        friendName:'马',
        Findex:'M'
      },
      {
        friendID:'23',
        friendImg:'/assets/images/author.jpg',
        friendName:'梁',
        Findex:'L'
      },
      {
        friendID:'24',
        friendImg:'/assets/images/author.jpg',
        friendName:'罗',
        Findex:'L'
      },
      {
        friendID:'25',
        friendImg:'/assets/images/author.jpg',
        friendName:'高',
        Findex:'G'
      },
      {
        friendID:'26',
        friendImg:'/assets/images/author.jpg',
        friendName:'胡',
        Findex:'H'
      },
      {
        friendID:'27',
        friendImg:'/assets/images/author.jpg',
        friendName:'谢',
        Findex:'X'
      },
      {
        friendID:'28',
        friendImg:'/assets/images/author.jpg',
        friendName:'邓',
        Findex:'D'
      },
      {
        friendID:'29',
        friendImg:'/assets/images/author.jpg',
        friendName:'周',
        Findex:'Z'
      },
      {
        friendID:'30',
        friendImg:'/assets/images/author.jpg',
        friendName:'何',
        Findex:'H'
      },
      {
        friendID:'31',
        friendImg:'/assets/images/author.jpg',
        friendName:'许',
        Findex:'X'
      },
      {
        friendID:'32',
        friendImg:'/assets/images/author.jpg',
        friendName:'姚',
        Findex:'Y'
      },
      {
        friendID:'33',
        friendImg:'/assets/images/author.jpg',
        friendName:'蔡',
        Findex:'C'
      },
      {
        friendID:'34',
        friendImg:'/assets/images/author.jpg',
        friendName:'丁',
        Findex:'D'
      },
      {
        friendID:'35',
        friendImg:'/assets/images/author.jpg',
        friendName:'冯',
        Findex:'F'
      },
      {
        friendID:'36',
        friendImg:'/assets/images/author.jpg',
        friendName:'宋',
        Findex:'S'
      },
      {
        friendID:'37',
        friendImg:'/assets/images/author.jpg',
        friendName:'余',
        Findex:'Y'
      },
      {
        friendID:'38',
        friendImg:'/assets/images/author.jpg',
        friendName:'唐',
        Findex:'T'
      }
    ],
    listMain:[
      // {
      //   id: "1", region: "A",
      //   items: [
      //     { Id: "..", name: "阿明" },
      //     { Id: "..", name: "奥特曼" },
      //     { Id: "..", name: "安庆" },
      //     { Id: "..", name: "阿曼" }
      //   ]
      // },
      // {
      //   id: "2", region: "B",
      //   items: [
      //     { Id: "..", name: "爸爸" },
      //     { Id: "..", name: "北京" }
      //   ]
      // },
    ],
    init:[],
    isActive:null,
    listTitles: [],
    fixedTitle:null,    
    toView: '',
    oHeight:[],
    scroolHeight:0,
    isCheckbox:true,
    placeholder:'请输入',
    changeBtn:false,
    nochange: true
  },

  changeType(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      typeActive:index
    })
  },
  
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
    var that=this;
    var _id = e.target.dataset.id;
    for (var i = 0; i < that.data.listMain.length; ++i) {
      if (that.data.listMain[i].id === _id) {
        that.setData({
          isActive:_id,
          toView: 'inToView' + _id
        })
        break
      }
    }
  },
  toBottom:function(e){
    console.log(e)
  },
  // 页面滑动时触发
  onPageScroll:function(e){
    this.setData({
      scroolHeight: e.detail.scrollTop
    });
    for (let i in this.data.oHeight){
      if (e.detail.scrollTop < this.data.oHeight[i].height){
        this.setData({
          isActive: this.data.oHeight[i].key,
          fixedTitle:this.data.oHeight[i].name
        });
        return false;
      }
    }
   
  },
// 处理数据格式，及获取分组高度
  getBrands:function(){
    var that=this;
    wx.request({
      url: '获取数据地址',
      success(res) {
        if(res.data.status==0){
          var someTtitle = null;
          var someArr=[];
          for(var i=0;i<res.data.data.length;i++){
            var newBrands = { ID: res.data.data[i].ID, name: res.data.data[i].name };
            if (res.data.data[i].initial != someTtitle){
              someTtitle = res.data.data[i].initial
              var newObj = {
                id: i,
                region: someTtitle,
                items: []
              };
              someArr.push(newObj)
            }
            newObj.brands.push(newBrands);
            
          };
          //赋值给列表值
          that.setData({
            listMain:someArr
          });
          //赋值给当前高亮的isActive
          that.setData({
            isActive: that.data.listMain[0].id,
            fixedTitle: that.data.listMain[0].region
          });
 
          //计算分组高度,wx.createSelectotQuery()获取节点信息
          var number=0;
          for (let i = 0; i < that.data.listMain.length; ++i) {
            wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
              number = rect.height + number;
              var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region}]
              that.setData({
                oHeight: that.data.oHeight.concat(newArry)
              })
 
            }).exec();
          };
         
        }
      }
    })
  },
  //模拟数据排序
  getHeigt(){
    var that=this;
    let {list,init}=that.data;

    //排序
    let map=[];
    list.forEach((item,index) => {
      const key=item.Findex
      if(!map[key]){
        map[key]={
          id: index+1,
          region: key,
          items: []
        }
      }
      map[key].items.push({
        Id: item.friendID,
        name: item.friendName,
        img: item.friendImg
      })
    });
    //console.log(map)
      //得到有序数据
      let ret=[]
      for(let key in map){
        let val=map[key]
        if(val.region.match(/[a-zA-Z]/)){
          ret.push(val)
        }
      };
      ret.sort((a,b)=>{
        return a.region.charCodeAt(0) - b.region.charCodeAt(0)
      });
      //return ret
      //console.log(ret)
      ret=init.concat(ret)
      that.setData({
        isActive: ret[0].id,
        fixedTitle: ret[0].region,
        listMain:ret
      });
      console.log(that.data.listMain)
      //计算分组高度,wx.createSelectotQuery()获取节点信息
      var number=0;
      for (let i = 0; i < that.data.listMain.length; ++i) {
        wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
          number = rect.height + number;
          var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region}]
          that.setData({
            oHeight: that.data.oHeight.concat(newArry)
          })

        }).exec();
      };

  },
  onLoad: function (options) {
    var that=this;
    //that.getBrands();
    that.getHeigt()
    
  },

  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    if(this.data.isCheckbox){
      return
    }
    wx.navigateTo({
      url: '/pages/friend-detail/friend-detail?id='+e.currentTarget.dataset.id,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    let {changeBtn}=this.data
    if(e.detail.value.length){
      changeBtn=true
    }else{
      changeBtn=false
    }
    this.setData({
      changeBtn,
      nochange: !changeBtn
    })
    console.log(changeBtn)
  },
  sureCreat(e) {
    wx.navigateTo({
      url: '/pages/add-group-detail/add-group-detail',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

})