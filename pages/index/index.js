//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: [{
      "url": "../../resources/images/banner1.png",
    },
    {
      "url": "../../resources/images/banner2.png",

    }
    ],
    content: [{
      'color': 'red',
      'title': '零售电商',
      'url': '../../resources/images/variety1.png'
    }, {
      'color': 'org',
      'title': '服饰鞋包',
      'url': '../../resources/images/variety2.png'
    }, {
      'color': 'yel',
      'title': '美容个妆',
      'url': '../../resources/images/variety3.png'
    }, {
      'color': 'pre',
      'title': '教育培训',
      'url': '../../resources/images/variety4.png'
    }, {
      'color': 'blue',
      'title': '教育培训',
      'url': '../../resources/images/variety5.png'
    }, {
      'color': 'lblue',
      'title': '教育培训',
      'url': '../../resources/images/variety6.png'
    }, {
      'color': 'pre',
      'title': '教育培训',
      'url': '../../resources/images/variety7.png'
    }, {
      'color': 'lblue',
      'title': '教育培训',
      'url': '../../resources/images/variety8.png'
    }],
    advantage: [{
      'url': '../../resources/images/advantage1.png',
      'text': '海量模板'
    }, {
      'url': '../../resources/images/advantage2.png',
      'text': 'DIY拖拽功能'
    }, {
      'url': '../../resources/images/advantage3.png',
      'text': '300+行业'
    }, {
      'url': '../../resources/images/advantage4.png',
      'text': '多营销功能'
    }, {
      'url': '../../resources/images/advantage5.png',
      'text': '店铺会员体系'
    }, {
      'url': '../../resources/images/advantage6.png',
      'text': '店铺数据分析'
    }]
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
    
  }
})