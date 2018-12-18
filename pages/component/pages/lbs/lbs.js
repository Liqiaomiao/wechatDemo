// pages/component/pages/lbs/lbs.js
let   amapFile = require('../../../../libs/amap-wx.js');
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
      let that = this;
      let myAmapFun = new amapFile.AMapWX({key:'dc6c7610f59be06826ce5b265716afb8'});
      myAmapFun.getRegeo({
          success:(data)=>{
              console.log('成功', data);
              this.setData({
                  pos:data[0].regeocodeData.addressComponent.province+data[0].name
              })
          },
          fail:(data)=>{
              console.log('失败', data);
          }
      })
      myAmapFun.getWeather({
          success:(data)=>{
              console.log(data);
              this.setData({
                  weather: data.liveData.weather,
                  winddirection: data.winddirection.data,
                  temperature:data.liveData.temperature
          })
          },
          fail:(data)=>{

          }
      })
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