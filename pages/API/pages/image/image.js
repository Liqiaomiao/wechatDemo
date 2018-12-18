// pages/API/pages/image/image.js
let sourceType=[['camera'],['album'],['camera','album']]
let sizeType=[['compressed'],['original'],['compressed','original']]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceTypeIndex:2,
    sourceType: ['拍照', '相册','拍照或相册'],

    sourceSizeIndex:2,
    sourceSize: ['压缩', '原图','压缩或原图']

  },
  sourceTypeChange({ detail}){
    this.setData({
      sourceTypeIndex: detail.value
    })
  },
  sourceSizeChange({detail}){
    this.setData({
      sourceSizeIndex:detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({options}) {

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