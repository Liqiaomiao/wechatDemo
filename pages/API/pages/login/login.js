var app = getApp()

Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        console.log(res)
        //发起网络请求
        wx.request({
          url: 'https://test.com/onLogin',
          data: {
            code: res.code
          },
          success:(resdata)=>{
            console.log('登录', resdata)
          }
        })
        app.globalData.hasLogin = true
        console.log(app)
        that.setData({
          hasLogin: true
        })
        
      }
    })
  }
})
