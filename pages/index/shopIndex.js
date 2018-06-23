//index.js
Page({
  data: {
    titleImg: "../../img/title.png",
    array: [
    ],
    indicatorDots: true,
    searchValue:"",
    storeInfoData:[{
      storeImg: "../../img/store.png",
      storeCode: "50012020",
      storeLocation: "岳麓区枫林绿洲有滋零食店",
      fansDes: "粉丝数",
      fansNum: 52,
      shopNumDes: "购买指数",
      shopNum: 788
    }]
  
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
  onSwiperTap: function (event) {
    var id = event.target.dataset.id;
    console.log("----" + id)

    wx.navigateTo({
      url: 'www.baidu.com',
    })
  },
  appTap: function (event) {
    console.log("====");
    wx.navigateTo({
      url: "detail"

    })
  },
  customData: {
    hi: 'MINA'
  }
})