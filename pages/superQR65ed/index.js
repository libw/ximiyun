Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreBanner: [{
      'url': 'https://ximicloud.oss-cn-beijing.aliyuncs.com/images/QR65-1.png?Expires=1543227068&OSSAccessKeyId=TMP.AQH5aD8wSC86F9bH3nio3DphTag_5mglJD1hcqzP9umGlB8SAzxfMvgbMlLUADAtAhRK2cMLUUaENLGea1Xw9s1oSnnj8gIVAK0-bTNpErzmOjwAsJgrrNPviGmc&Signature=Q2nD5pHtPuEPxr%2FFaT48kzcYvjU%3D'
    }],
    
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