// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

document.querySelector('.header__icon').addEventListener('click', function(){
    var element = document.getElementsByClassName("header__icon")[0];
    element.classList.toggle("open");
    var element2 = document.getElementsByClassName("header__nav-menu")[0];
    element2.classList.toggle("open");
    
}) 


let lang=document.querySelector('.Lang');
lang.addEventListener('click',function(e){
    var element3=document.getElementsByClassName("EN")[0];
    element3.classList.toggle("open");
    e.stopPropagation();
})  



document.querySelectorAll('.EN span').forEach(function(e,i){
   e.addEventListener('click',function(){
        window.event.preventDefault();
        let a=this.innerText;
        lang.querySelector('span').innerText=a;
   })
})



document.body.addEventListener('click',function(){
    var element3=document.getElementsByClassName("EN")[0];
    element3.classList.remove("open");
    
})


let btt=document.querySelector('.backToTop');
btt.addEventListener('click',function(){
    window.scrollBy({
        top:-document.documentElement.scrollTop,
        behavior: "smooth",
        duration:0.5
    })
})



let tab__title=document.querySelectorAll('.New__tab-title a');
tab__title.forEach((e,i)=>{
    e.addEventListener('click',function(a){
        a.preventDefault();
        document.querySelector('.New__tab-title .active').classList.remove('active');
        e.classList.add('active');

        // let content=document.querySelector('.New__tab-content > *:nth-child('+(i+1)+')');
        let content=document.querySelectorAll('.New__tab-content > *')[i];
        let c=document.querySelector('.New__tab-content .active');
        c.classList.remove('active');
        c.style.display='none';
        content.classList.add('active');
        content.style.display='block';
        console.log(content);
    })
})

// document.querySelectorAll('.New__tab a').forEach(function(e,i){
//     e.addEventListener('click',function(a){
//         a.preventDefault();
//         var t =document.getElementsByClassName("New__tab")[0];
//         t.classList.toggle("active");
//     })
// })





let sliderItems = document.querySelectorAll('.slider1__item-wrap .slider1__item');
let sliderNumber = document.querySelector('.slider1__bottom-paging .number');
let dotted = document.querySelector('.slider1__bottom-paging .dotted ul');
let currentIndex = 0;


sliderItems.forEach((e ,i) => {
    let li = document.createElement('LI');
    if( i == 0){
        li.classList.add('active')
    }
    dotted.appendChild(li);
})

let dottedLi = dotted.querySelectorAll('li');
document.querySelector('.slider1 .--prev').addEventListener('click', function(){
    if(currentIndex > 0){
        sliderTo(currentIndex - 1)
    }
    else{
        
    }
})

document.querySelector('.slider1 .--next').addEventListener('click', function(){
    console.log('22');
    if(currentIndex < sliderItems.length - 1){
        console.log('11');
        sliderTo(currentIndex + 1)
    }
    
    
})


dottedLi.forEach(function(e, i) {
    e.addEventListener('click', function(){
        sliderTo(i)

    })
})



function sliderTo(index){
    let sliderCurrent = sliderItems[currentIndex];
    console.log('111');
    let nextSlider = sliderItems[index];
    dottedLi[index].classList.add('active')


    sliderCurrent.classList.remove('fadeIn');
    nextSlider.classList.add('fadeIn');

    dottedLi[currentIndex].classList.remove('active')
    currentIndex = index;

    sliderNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');

}




// let itemAnimations = document.querySelectorAll('[data-animation]')

// window.addEventListener('scroll', function(){
//     let scrollTop = document.documentElement.scrollTop
//     itemAnimations.forEach(e => {
//         if(scrollTop + window.outerHeight - 300 > e.offsetTop){
//             let className = e.getAttribute('data-animation');

//             e.classList.remove(className);
//         }
//     })

// })



//video
let videotop1 =document.querySelector('.play');
let video=document.querySelector('.play iframe');


document.querySelectorAll('.play').forEach(function(e){
    console.log(e);
    e.addEventListener('click',function(){
        console.log('555');
        let videoid= this.getAttribute('data-id');
        console.log(videoid);
        video.setAttribute('src', 'https://www.youtube.com/embed/' + videoID)
        videotop1.style.display = 'flex';
    })
})
// document.querySelector('.videotop1 .close').addEventListener('click', function(){
//     videotop1.style.display = 'none';
// })



$('.Jquery .titlee').on('click' ,  function(){
    $('.contentt').slideUp('slow',function(){})
    $(this).next().stop().slideToggle("slow",function(){})
    
})


$('.header__nav-menu .titlehd').on('click',function(){
    // $('.contenthd ').toggleClass('active');
    // $(this).next().addClass('active')
    $('.contenthd').slideUp('slow',function(){})
    $(this).next().stop().slideToggle('slow',function(){})
    
})