var app = getApp()
Page({
  data: {
    currentstyle:`transform:translate(10px,30px);z-index:2;`,
    commonstyle: `transform:translate(20px,25px);z-index:1;`,
    current:'0',
    start:'0',
    end:'0',
    scroll:''
  },

  touchstart(e){
    let current=e.currentTarget.id;
    let start = e.changedTouches[0].clientY;
    this.setData({
      start:start
    })
    this.stopScroll()
  },
  touchmove(e){
    let moving = e.changedTouches[0].clientY;
    let start=this.data.start;
    let reduce=moving-start;


  },
  touchend(e){
    let end = e.changedTouches[0].clientY;
    let start = this.data.start;
    let current = this.data.current;
    if(end-start>0){//下移动
      current++
 
      if(current>2){
        current=0
      }
    }else{
      current--
      if(current<0){
        current=2
      }
    }
    
    this.setData({
      current
    })
    let that=this
    this.stopScroll()
    setTimeout(()=>{
      that.setScroll()
    },1000)
  },
  stopScroll(){
    let timer = this.data.scroll;
    clearInterval(timer)
  },
  setScroll(){
    let current = this.data.current;
    this.setData({
      scroll: setInterval(() => {
        current++
        if (current > 2) {
          current = 0
        }
        this.setData({
          current
        })
      }, 1500)
    })
  },
  onReady(e){
   
    this.setScroll()
   
  },
  onLoad(e) {
    this.setData({
      msgList: [
        { id: "0", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
        { id: "1", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱" },
        { id: "2", title: "公告：你想和一群有志青年一起过生日嘛？" }]
    });
  
    
  }
})