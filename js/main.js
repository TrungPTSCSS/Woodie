


$(window).on('load',function(){
    $('.loader-container').fadeOut(1000)
  })
  
  $('.slider').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      wrapAround:true,
      autoPlay:3000,
      
      // on: {
      //   ready:function(){
      //     let dotted=$('.flickity-page-dots'),
      //         paging=('.slider-bottom .dotted')
      //         dotted.appendTo(paging);
      //   }
      // //   ,
      // //   change:function(index){
      // //     let number=$('.slider1__bottom-paging .number')
      // //     let indexPage=index+1
      // //     number.text(indexPage.toString().padStart(2,0))
      // //   }
      // },
  });
  // $('.slider').flickity({
  //     // options
  //     cellAlign: 'left',
  //     contain: true,
  //     prevNextButtons: true,
  //     wrapAround:true,
  //     // autoPlay:2000
  //     // on: {
  //     //   ready:function(){
  //     //     let dotted=$('.flickity-page-dots'),
  //     //         paging=('.slider1__bottom-paging .dotted')
  //     //         dotted.appendTo(paging);
  //     //   },
  //     //   change:function(index){
  //     //     let number=$('.slider1__bottom-paging .number')
  //     //     let indexPage=index+1
  //     //     number.text(indexPage.toString().padStart(2,0))
  //     //   }
  //     // }
  // });

  var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 
  
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
  };
  
  initPhotoSwipeFromDOM('.gallery__carousel-img');



  let tab__title=document.querySelectorAll('.pop-item-title a');
  tab__title.forEach((e,i)=>{
      e.addEventListener('click',function(a){
          a.preventDefault();
          document.querySelector('.pop-item-title .active').classList.remove('active');
          e.classList.add('active');
  
          // let content=document.querySelector('.New__tab-content > *:nth-child('+(i+1)+')');
          let content=document.querySelectorAll('.pop-item-content > *')[i];
          let c=document.querySelector('.pop-item-content .active');
          c.classList.remove('active');
          c.style.display='none';
          content.classList.add('active');
          content.style.display='block';
          console.log(content);
      })
  })

  window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop >200){
      document.querySelector('.container-fluid').classList.add('fix')
    }else{
      document.querySelector('.container-fluid').classList.remove('fix')
    }
  })
  