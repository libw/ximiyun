Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreBanner: [{
      'url': '../../resources/images/moreBanner.png'
    }],
    moreContent: [{
        'title': '西米云',
        'color': 'red',
        'contentPart1': '服务千万商家',
        'contentPart2': '新零售方案提供者',
        'contentPart3': '让世上没有难做的生意',
        'url': '../../resources/images/yun.png',
        'id':'lakala'
      },
      {
        'title': '拉卡拉',
        'color': 'org',
        'contentPart1': '新一代移动智能POS',
        'contentPart2': '全支付，全受理',
        'contentPart3': '超越支付，无限可能',
        'url': '../../resources/images/ya.png',
        'id': 'ximiyun'
      }
      // ,
      // {
      //   'title': '乐店云',
      //   'color': 'yel',
      //   'contentPart1': '服务千万商家',
      //   'contentPart2': '服务千万商家',
      //   'contentPart3': '服务千万商家',
      //   'url':'../../resources/images/pos.png'
      // },
    ]
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

  },
  //点击跳转 
  navTo: function(e) {
    console.log(e)
    wx.navigateTo({
      url: "/pages/" + e.currentTarget.dataset.id+"/index"
    })
  }
})