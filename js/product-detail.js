$(window).on('load',function(){
    $('.loader-container').fadeOut(1000)
  })
  window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop >200){
      document.querySelector('.container-fluid').classList.add('fix')
    }else{
      document.querySelector('.container-fluid').classList.remove('fix')
    }
  })
  $('.orther_product-content').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    wrapAround:true,
    freeScroll:true
    // autoPlay:3000,
    // on: {
    //   ready:function(){
    //     let dotted=$('.flickity-page-dots'),
    //         paging=('.slider-bottom .dotted')
    //         dotted.appendTo(paging);
    //   }
    //   ,
    //   change:function(index){
    //     let number=$('.slider1__bottom-paging .number')
    //     let indexPage=index+1
    //     number.text(indexPage.toString().padStart(2,0))
    //   }
    // },
  });