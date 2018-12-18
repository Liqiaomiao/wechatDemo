var order = ['demo1','demo2','demo3']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:'demo2',
    scrollTop:0
  },
  upper:function(e){
    console.log('upper',e)
  },
  lower:function(e){
    console.log('lower',e)
  },
  scroll:function(){

  },
  scrollToTop:function(){
    this.setAction({
      scrollTop: 0
    })
  },
  tap:function(){
    var index = order.indexOf(this.data.toView);
    if(index==2){
      index=-1
    }
    this.setData({
      toView:order[index+1]
    })
  
  },
  tapMove:function(){
    console.log(this.data.scrollTop)
    this.setData({
      scrollTop:this.data.scrollTop+100
    })
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