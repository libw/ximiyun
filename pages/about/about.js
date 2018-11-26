var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');

var address = new QQMapWX({
  key: 'H3OBZ-STJR4-VHKUV-XLWMJ-RDE4T-6SBKJ' // 必填 换成自己申请到的
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutBanner: [{
      "imgUrl": '../../resources/images/aboutBanner.png'
    }],
    about: [{
      "tel": '029-68851859',
      "indexUrl": 'www.123.com',
      "address": '陕西省西安市碑林区帝源豪庭大厦B-31E',
      "telIcon": '../../resources/images/phone.png',
      "addressIcon": '../../resources/images/local.png'
    }],
    trademark: [{
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, {
      "imgUrl": "../../resources/images/eg.png"
    }, ],
    partner: [{
      "imgUrl": "../../resources/images/alibabaCloud.png"
    }, {
      "imgUrl": "../../resources/images/tencetCloud.png"
    }, {
      "imgUrl": "../../resources/images/tencetSpace.png"
    }]
  },
  callPhone: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.about[0].tel 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '小企业的推进器，大店铺的引流渠',
      path: '/pages/index/index'
    }
  },
  seeMap: function () {
   
    address.geocoder({
      address: this.data.about[0].address,
      success: function (res) { 
        var latitude = res.result.location.lat
        var longitude = res.result.location.lng
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          address: this.address
        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },
})