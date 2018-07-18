// pages/index/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:"湖南省长沙市岳麓区观沙岭街道枫林绿洲1栋105号门面",
    takeLocation:"岳麓枫林绿洲有滋零食店50012020店",
    callPhone:"18684677755",
    shopOrderDetail:[{
      id:1,
      shopImageUrl: "../../img/xianggua_detail1.png",
      title:"直采本地甜香瓜2至3个/份,约2至2.5斤",
      subTitle:"一级果约2至2.5斤",
      time:"07月16日  16:00提货"
    }],
    discountPrice: 8.8,
    price: 18.8,
    minusStatus: 'disabled',
    num: 1,
    totalPrice: 8.8,
    showModal: false

    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    var discountPrice = this.data.discountPrice;
    var totalPrice = (num * discountPrice).toFixed(2);
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      totalPrice: totalPrice
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    var discountPrice = this.data.discountPrice;
    var totalPrice = (num * discountPrice).toFixed(2);
    console.log("totalPrice---==>" + totalPrice)
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      totalPrice: totalPrice
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    console.log("nunm===>"+num);
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },
  cancel: function () {
    this.setData({
      showModal: false
    })
  },
  confirmBtn:function(){
    wx.navigateTo({
      url: '../index/payType'
    })
    wx.showLoading({
      title: '数据加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    this.setData({
      showModal: false
    })
  }



})
