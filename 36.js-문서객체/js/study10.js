window.onload = function(){

    let station1 = new Swiper(".station1",{
        loop:true,
        // direction:"vertical",
        direction:"horizontal",
        // slidesPerView:3, // 슬라이드 개수의 반만큼 최대 적용 가능
        // spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',  // 태그
            type: 'bullets',  // 형태 ; 총알
            clickable: true
        },
        navigation: {
            nextEl: ".csNextBtn",
            prevEl: ".csPrevBtn",
        },  
        autoplay:{
            delay:1000 ,
            // pauseOnMouseEnter: true
        },
        speed: 1000,
        breakpoints:{
            320:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:10
            },
            1024:{
                slidesPerView:3,
                spaceBetween:20
            }
        }
        
              
    })
    document.querySelector(".station1").addEventListener ("mouseover",function(){
        station1.autoplay.stop()
    })
    document.querySelector(".station1").addEventListener ("mouseout",function(){
        station1.autoplay.start()
    })

    // let slider1 = new Swiper(".station1",{
        
    //     loop: true,
    //     slidesPerView: 1,
    //     pagination: {
    //         el: ".swiper-pagination",
    //       }
    // })

    // let slider2 = new Swiper(".station2",{
        
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       }
        
    // })

}