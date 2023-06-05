window.onload = function(){

    let newsSLider = new Swiper(".news_station",{
        pagination: {
            el: '.news_pagination',
            clickable: true
          },
        breakpoints:{
        280:{
            slidesPerView:1
        },
        768:{
            slidesPerView:3
        }        
        }
    });

    let noticeSLider = new Swiper(".notice_station",{    
        
        breakpoints:{
        280:{
            slidesPerView:1
        },
        768:{
            slidesPerView:4,
            spaceBetween: 20
        }        
        },
        pagination: {
            el: '.notice_pagination',
            clickable: true
        }
    });

}