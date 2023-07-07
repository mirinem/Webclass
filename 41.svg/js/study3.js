$(document).ready(function(){

    // $(".btn").click(function(){

    //     if($(".skill").hasClass("on")==false){
    //         // skill클래스에 on클래스가 없다면
    //         $(".skill").addClass("on")

    //         $(".skill>li").each(function(){
    //             let list = $(this)
    //             let percent = $(this).find(".per").text()
    //             let count = 0
    //             let circle = $(this).find("circle")
    
    //             let timer = setInterval(function(){
    //                 count++
    //                 list.find(".per").text(count+"%")
    //                 circle.css("stroke-dashoffset",314-(314*(count/100)))
    //                 if(count>=percent){
    //                     clearInterval(timer)
    //                 }
    //             })
    
    //         })

    //     }

    // })


    // 스크롤을 했을 때 동작이 실행
    $(window).scroll(function(){

        let winTop = $(window).scrollTop()
        let skillTop = $(".skill").offset().top
        let winHeight = $(window).height()*0.5

        if(winTop+winHeight>=skillTop){
        
            if($(".skill").hasClass("on")==false){
                // skill클래스에 on클래스가 없다면
                $(".skill").addClass("on")
    
                $(".skill>li").each(function(){
                    let list = $(this)
                    let percent = $(this).find(".per").text()
                    let count = 0
                    let circle = $(this).find("circle")
        
                    let timer = setInterval(function(){
                        count++
                        list.find(".per").text(count+"%")
                        circle.css("stroke-dashoffset",314-(314*(count/100)))
                        if(count>=percent){
                            clearInterval(timer)
                        }
                    })
        
                })
    
            }
        }
    })


    
})