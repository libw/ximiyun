Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreBanner: [{
      'url': '../../resources/images/lakalaBanner.png'
    }],
    advantage: [{
      'url': '../../resources/images/lakalaSafe.png',
      'text': '海量模板'
    }, {
      'url': '../../resources/images/lakalaMore.png',
      'text': 'DIY拖拽功能'
    }, {
      'url': '../../resources/images/lakalaPay.png',
      'text': '300+行业'
    }, ],
    lakalaContent: [{
      imgUrl: '../../resources/images/lakalaPos.png',
      title: '智能pos机',
      content: '一款基于互联网和云计算的智能POS终端。各种定制化应用助力商户实现智能化的店铺经营。',
      icon: [{
        iconUrl: '../../resources/images/lakalagnff.png',
        iconText: '功能丰富'
      }, {
        iconUrl: '../../resources/images/lakalasqsy.png',
        iconText: '随去随用'
      }, {
        iconUrl: '../../resources/images/lakalalcbj.png',
        iconText: '流程便捷'
      }],
      position: 'left',
      backgroundColor: 'rgb(126, 206, 244)',
      color: '#fff',
      width: '44%'
    }, {
      imgUrl: '../../resources/images/lakalaPos1.png',
      title: '超级收款宝',
      content: '超级收款宝是一款全能扫码、云闪付于一体的轻便型两用独立扫码终端为中小微商户提供完美的收款体验。',
      icon: [{
        iconUrl: '../../resources/images/lakalaNFC.png',
        iconText: '主被扫两用'
      }, {
        iconUrl: '../../resources/images/lakalaQCode.png',
        iconText: '支持NFC'
      }, {
        iconUrl: '../../resources/images/lakalaGathering.png',
        iconText: '独立完成收款'
      }],
      position: 'right',
      backgroundColor: '#fff',
      color: '#000',
      width: '58%'
    }, {
      imgUrl: '../../resources/images/lakalaMPos.png',
      title: '手机收款宝',
      content: '通过蓝牙配合相关的客户端，实现与Android和IOS智能手机进行通讯，为使用者提供收款、转账、等多项金融服务。',
      icon: [{
        iconUrl: '../../resources/images/lakalajygl.png',
        iconText: '交易管理'
      }, {
        iconUrl: '../../resources/images/lakalajscx.png',
        iconText: '即使撤销'
      }, {
        iconUrl: '../../resources/images/lakalasslc.png',
        iconText: '实施理财'
      }, {
        iconUrl: '../../resources/images/lakalasjyh.png',
        iconText: '手机银行'
      }, {
        iconUrl: '../../resources/images/lakalaydsk.png',
        iconText: '移动收款'
      }],
      position: 'left',
      backgroundColor: 'rgb(126, 206, 244)',
      color: '#fff',
      width: '58%'
    }, {
      imgUrl: '../../resources/images/lakalaPosQ.png',
      title: '超级收款宝Q50',
      content: '2.4寸真彩LED主屏+六位LED客显屏， 让交易双方对金额一目了然， 10 个数字键 + 9 大功能键， 单手就能操作完成。',
      icon: [{
        iconUrl: '../../resources/images/tu2.png',
        iconText: '完善的方案'
      }, {
        iconUrl: '../../resources/images/tu3.png',
        iconText: '独立完成收款'
      }],
      position: 'right',
      backgroundColor: '#fff',
      color: '#000',
      width: '58%'
    }, ]
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
      url: "/pages/" + e.currentTarget.dataset.id + "/index"
    })
  }
})