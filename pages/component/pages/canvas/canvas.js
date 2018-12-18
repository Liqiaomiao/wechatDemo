// pages/component/pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupH:374,
    canvasVisible:false,
    arr:[],
    records:[
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
        {

            "id": "a1548472-c392-11e8-8631-00163e3087df",
            "tradeNo": "SVC18092900003",

            "cardInfoID": "2017000200010009",
            "cardCat": "1",
            "orderFlow": 3,
            "actualPayFee": -360.0,
            "consumeCount": 0,
            "surplusCount": 0,
            "tradeType": "5",
            "tradeWay": "7",
            "tradeChannel": "4",
            "tradeTime": "09-29 10:51",
            "tradeYear": "2018",

            "tradeName": "扣除年费，尾号(0009)",

            "tradeTypeStr": "年费",
            "tradeWayStr": "会员卡",
            "tradeChannelStr": "线上",
            "cardType": "VIP",
            "cardTypeName": "贵宾个人卡",
            "cardSeriesStr": "VIP - 贵宾个人卡",
        },
      {

        "id": "a1548472-c392-11e8-8631-00163e3087df",
        "tradeNo": "SVC18092900003",

        "cardInfoID": "2017000200010009",
        "cardCat": "1",
        "orderFlow": 3,
        "actualPayFee": -360.0,
        "consumeCount": 0,
        "surplusCount": 0,
        "tradeType": "5",
        "tradeWay": "7",
        "tradeChannel": "4",
        "tradeTime": "09-29 10:51",
        "tradeYear": "2018",

        "tradeName": "扣除年费，尾号(0009)",

        "tradeTypeStr": "年费",
        "tradeWayStr": "会员卡",
        "tradeChannelStr": "线上",
        "cardType": "VIP",
        "cardTypeName": "贵宾个人卡",
        "cardSeriesStr": "VIP - 贵宾个人卡",
      },
      {

        "id": "a1548472-c392-11e8-8631-00163e3087df",
        "tradeNo": "SVC18092900003",

        "cardInfoID": "2017000200010009",
        "cardCat": "1",
        "orderFlow": 3,
        "actualPayFee": -360.0,
        "consumeCount": 0,
        "surplusCount": 0,
        "tradeType": "5",
        "tradeWay": "7",
        "tradeChannel": "4",
        "tradeTime": "09-29 10:51",
        "tradeYear": "2018",

        "tradeName": "扣除年费，尾号(0009)",

        "tradeTypeStr": "年费",
        "tradeWayStr": "会员卡",
        "tradeChannelStr": "线上",
        "cardType": "VIP",
        "cardTypeName": "贵宾个人卡",
        "cardSeriesStr": "VIP - 贵宾个人卡",
      },
      {

        "id": "a1548472-c392-11e8-8631-00163e3087df",
        "tradeNo": "SVC18092900003",

        "cardInfoID": "2017000200010009",
        "cardCat": "1",
        "orderFlow": 3,
        "actualPayFee": 360.0,
        "consumeCount": 0,
        "surplusCount": 0,
        "tradeType": "5",
        "tradeWay": "7",
        "tradeChannel": "4",
        "tradeTime": "09-29 10:51",
        "tradeYear": "2018",

        "tradeName": "扣除年费，尾号(0009)",

        "tradeTypeStr": "年费",
        "tradeWayStr": "会员卡",
        "tradeChannelStr": "线上",
        "cardType": "VIP",
        "cardTypeName": "贵宾个人卡",
        "cardSeriesStr": "VIP - 贵宾个人卡",
      }
      
    ]
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
  initCanvas: function (callback){
   
    const context = wx.createCanvasContext('longCanvas')
    this.data.records.forEach((item, index) => {
      this.drawCell({
        x: 0,
        y: 70 * index,
        index,
        tradeName: item.tradeName,
        actualPayFee: item.actualPayFee,
        cardSeriesStr: item.cardSeriesStr,
        tradeTypeStr: item.cardSeriesStr,
        tradeTime: item.tradeTime,
        icontext: item.actualPayFee > 0 ? '进' : "出",
        actualPayFeeColor: item.actualPayFee > 0 ? '#19be6b' : "#ed4014",
        context
      })
    })

    context.draw(true,()=>{
      wx.showLoading({
        title: '正在生成图片'
      })
      setTimeout(()=>{
        wx.canvasToTempFilePath({
          destWidth: this.data.screenWidth * 4,
          destHeight: this.data.imgheight * 4,
          width: this.data.screenWidth,
          height: this.data.imgheight,
          canvasId: 'longCanvas',
          success(res) {
            wx.showLoading({
              title: '图片生成成功'
            })
            wx.hideLoading()
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath
            })
          }
        }) 
      },1000)
  
    })
  },
  drawCell({ x, y, index, tradeName, 
            actualPayFee, cardSeriesStr,
            tradeTypeStr, tradeTime, icontext, 
            actualPayFeeColor,context}){
    let screenWidth = this.data.screenWidth; 
    let unit = this.data.screenWidth/375;
    //框
    context.beginPath();
    context.rect(0, y , 375 * unit, 70)
    context.fillStyle = "#edeadb";
    context.fill()
    // 圆
    context.beginPath();
    context.arc(35, 35+70*index, 25, 0, 2 * Math.PI)
    context.fillStyle = "#be9457";
    context.fill()

    //字(进出)

    context.font = "24px Arial";
    context.fillStyle = "#fff";
    context.fillText(icontext, 23, 43+70*index)


    //字 第一行大字
    context.font = "15px Arial";
    context.fillStyle = "#333";
    context.fillText(tradeName, 75, 22  +70 * index)
    //字 第一行小字

    context.font = "15px Arial";
    context.fillStyle = actualPayFeeColor ;
    context.textAlign = "right";
    context.fillText(actualPayFee, 355 * unit, 22+70 * index)

    //字 第二行小字
    context.font = "12px Arial";
    context.fillStyle = "#555";
    context.textAlign = "left";
    context.fillText(`[${cardSeriesStr}] [${tradeTypeStr}]`, 75 , 42 + 70 * index)

    //字 第三行小字
    context.font = "12px Arial";
    context.fillStyle = "#555";
    context.textAlign = "left";
    context.fillText(tradeTime, 75, 60 + 70 * index)

    //小线条
    context.strokeStyle = '#be9457'
    context.moveTo(75 , 70 * (index + 1) )
    context.lineTo(screenWidth-20, 70 * (index + 1) )
    context.stroke();


 
   
  },
  initDetail(){
    let context = wx.createCanvasContext('longCanvas2');
    let imgpath=this.data.imgpath;
    this.data.records.forEach((item,index)=>{
      this.drawDetail({
          context,
          index,
          cardSeriesStr: item.cardSeriesStr,
          actualPayFee: item.actualPayFee,
          imgpath: imgpath

      })
    })
      this.setData({
          canvasVisible:true
      })
    context.draw(true,()=>{
    setTimeout(()=>{
        wx.showLoading({
            title: '正在生成图片'
        })
        wx.canvasToTempFilePath({
            destWidth: this.data.screenWidth * 4,
            destHeight: this.data.imgheight * 4,
            width: this.data.screenWidth,
            height: this.data.imgheight,
            canvasId: 'longCanvas2',
            success:(res)=> {
                wx.showLoading({
                    title: '图片生成成功'
                })
                wx.hideLoading()
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success:()=>{
                        this.setData({
                            canvasVisible:false
                        })
                    }
                })
            }
        })
    },500)


      
    });
   

  },
  drawDetailCell({leftText,rightText,baseline,context,index,type}){
    let screenWidth=this.data.screenWidth;
    let   groupH=this.data.groupH;
      context.font = "14px Arial";
      context.fillStyle = "#333";
      context.textAlign = "left";
      context.fillText(leftText, 20, baseline)

      context.font = "14px Arial";
      context.fillStyle = "#333";
      context.textAlign = "right";
      context.fillText(rightText, screenWidth - 40, baseline)

      context.moveTo(screenWidth - 20, baseline-5)
      context.lineTo(screenWidth - 20 - 5, baseline-10)
      context.stroke();

      context.moveTo(screenWidth - 20, baseline-5)
      context.lineTo(screenWidth - 20 - 5, baseline)
      context.stroke();

      if(type!='last'){
          context.moveTo(20, baseline +20)
          context.lineTo(screenWidth-10, baseline+20)
          context.strokeStyle='#ccc';
          context.stroke();
      }

  },
  drawDetail({ context, index, cardSeriesStr, actualPayFee,imgpath}){
    let screenWidth = this.data.screenWidth;
    let unit = this.data.screenWidth / 375;
    let groupH=374
    
    //框
    context.save();
    context.beginPath();


    context.rect(10,(groupH+10) * index, (375-20) * unit, groupH)
    context.fillStyle = "#edeadb";
    context.fill()
    //圆
    context.beginPath();
    context.strokeStyle = '#0000ff';
    context.arc((screenWidth - 138) / 2, (26+(10 +groupH)*index), 16, 0, 2 * Math.PI);
    context.stroke();
    context.clip();
    //图片

    context.drawImage('../../../../'+imgpath,
      0, 0, 100, 63, ((screenWidth - 138) / 2 - 16-10), (10 + (10 + groupH) * index), 50,32)

    context.restore();
    //图片旁边的文字
    context.font = "18px Arial";
    context.fillStyle = "#333";
    context.textAlign='left'; 
    context.fillText(cardSeriesStr, (screenWidth - 138) / 2 + 23, 32+( 10+ groupH)* index)

    //价钱
    context.font = "28px Arial";
    if (actualPayFee>0){
      context.fillStyle = "#5eb95e";
    }else{
      context.fillStyle = "#dd514c";
    }
    let ctxwidth = context.measureText(actualPayFee).width
    context.fillText(actualPayFee, (screenWidth - ctxwidth) / 2 ,70 + (10 + groupH) * index)
    //交易成功
    context.font = "14px Arial";
    context.fillStyle = "#555";
    let ctxwidth2 = context.measureText('交易成功').width
    context.fillText('交易成功', (screenWidth - ctxwidth2) / 2, 96 + (10 + groupH) * index)
    //线
    context.moveTo(10,110+(10+groupH)*index)
    context.lineTo(screenWidth - 10, 110 + (10 + groupH) * index)
    context.strokeStyle='#888';
    context.stroke();
    //内容第一行
    let baseline = 140 + (10 + groupH) * index;
    this. drawDetailCell({leftText:'卡号',rightText:'2017 0001 001 0101',baseline,context,index})

    //第二行

    baseline = baseline + 50;
      this. drawDetailCell({leftText:'交易方式',rightText:'微信',baseline,context,index})

    //第三行

    baseline = baseline + 50;
      this. drawDetailCell({leftText:'交易类型',rightText:'充值',baseline,context,index})

    //第四行

    baseline = baseline + 50;
      this. drawDetailCell({leftText:'交易渠道',rightText:'微信小程序',baseline,context,index})
    //第五行

    baseline = baseline + 50;
      this. drawDetailCell({leftText:'说明',rightText:'微信小程序',baseline,context,index,type:'last'})
    //结尾线
    context.moveTo(10, groupH+ (10+groupH)*index)
    context.lineTo(screenWidth - 10, groupH + (10 + groupH) * index)
    context.strokeStyle = '#888';
    context.stroke();

  },

  toLongImg(){
    this.initDetail();
   
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    wx.getSystemInfo({
      success: res => {
        this.setData({
          screenWidth: res.screenWidth
        })
      },
    })
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success: res => {

      }
    })
    let _this = this;
 
    let imgheight=this.data.records.length*394;

    this.setData({
      imgheight
    })


      wx.getImageInfo({
          src: '../../../../image/card.png',
          success: (res)=> {
            this.setData({
                imgpath:res.path
            })
          }
      })


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