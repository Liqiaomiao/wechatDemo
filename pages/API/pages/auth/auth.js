// pages/API/pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.authorize({
      scope: 'scope.userLocation',
      success(e) {
        console.log('地理位置',e)
      }
    })
    wx.authorize({
      scope: 'scope.address',
      success(e) {
        console.log('通讯地址',e)
      }
    })
    wx.authorize({
      scope: 'scope.invoiceTitle',
      success(e) {
        console.log('发票抬头', e)
      }
    })
    wx.authorize({
      scope: 'scope.werun',
      success(e) {
        console.log('微信运动步数', e)
      }
    })
    wx.authorize({
      scope: 'scope.record',
      success(e) {
        console.log('录音功能', e)
      }
    })
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success(e) {
        console.log('保存到相册', e)
      }
    })
    wx.authorize({
      scope: 'scope.camera',
      success(e) {
        console.log('摄像头', e)
      }
    })
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