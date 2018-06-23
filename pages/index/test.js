//index.js
Page({
  data: {
    text: "This is page data.",
    array: [{
      message: '充话费',
      }, {
      message: '充流量'
      }
      , {
      message: '发红包'
      }
      , {
      message: '信用卡'
      }
      , {
      message: '生活缴费'
      },
      {
      message: '和聚宝'
      },
      {
      message: '和掌柜'
      },
      {
      message: '火车票'
      },
      {
      message: '转账'
      }
      ,
      {
      message: '全部'
      }
      ],
      
    imgData: [
     {
        "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        "id":"1"
      }, {
        "img": 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        "id": "2"

     }, {
        "img": 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        "id": "3"

     } 
      
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000

  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('fffff');

    wx.request({
      url: 'https://www.groooy.com/small', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    });

     
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  onSwiperTap:function(event){
    var id = event.target.dataset.id;
    console.log("----"+id)
  
    wx.navigateTo({
      url: 'www.baidu.com',
    })
  },
  appTap:function(event){
    console.log("====");
    wx.navigateTo({
      url: "detail"

    })
  },
  customData: {
    hi: 'MINA'
  }
})