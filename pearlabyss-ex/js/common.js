window.onload = function(){

    let newsSLider = new Swiper(".news_station",{
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
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
        slidesPerView: 2,
        pagination: {
            el: '.noBtn.swiper-pagination',
          },
        breakpoints:{
        280:{
            slidesPerView:1
        },
        768:{
            slidesPerView:4
        }        
        }
    });

}