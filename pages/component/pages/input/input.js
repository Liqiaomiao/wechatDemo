Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:''
  },
  bindKeyInput(e){
    let val = e.detail.value;
    this.setData({
      inputValue:val
    })
  },
  bindReplaceInput(e){
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
   
   
      // 光标在中间
      left = value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
  

  
    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

  },
  bindHideKeyboard(e){
    if(e.detail.value==='123'){
      wx.hideKeyboard()
    }
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