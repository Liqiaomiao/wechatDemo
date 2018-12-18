Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.02178007178599,
    longtitude: 117.25455913269043,
    markers: [{
      id: 1,
      latitude: 39.02178007178599,
      longtitude: 117.25455913269043,
      name: 'T.I.T 创意园'
    }],
  },
  getCenterLocation(e){
    this.mapCtx.getCenterLocation({
      success:function(res){
      
        console.log(res.latitude)
        console.log(res.longitude)
      }
    })
  },
  moveToLocation(){
    this.mapCtx.moveToLocation()
  },
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:1,
      autoRotate:true,
      duration:1000,
      destination:{
        latitude:  39.02178007178599 ,
        longtitude: 117.25455913269043
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 39.02229,
        longitude: 117.244559,
      }, {
          latitude: 39.02229,
          longitude: 117.244559,
      }]
    })
  },
  getpos(){
    wx.getSetting({
        success:(res)=>{
            console.log(res);
            if (!res.authSetting['scope.userLocation']){
            wx.authorize({
                scope: 'scope.userLocation',
                success:()=>{
                    wx.chooseLocation({
                        success:(res)=>{
                            console.log('地理位置',res);
                        }
                    })
                }
            })
          }else{
                wx.chooseLocation({
                    success:(res)=>{
                        console.log('地理位置',res);
                    }
                })
            }
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('myMap');
    let that=this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          latitude,
          longitude
        })
        console.log('当地纬度', longitude)
        console.log('当地经度', latitude)
       
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