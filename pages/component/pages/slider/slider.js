var pageData={}
for(var i =1;i<5;i++){
  (function(){
    pageData['slider'+i+'change']=function(e){
      console.log('slider'+i+'发生change事件，携带值为'+e.detail.value)
    }

  })(i)

}

Page(pageData)