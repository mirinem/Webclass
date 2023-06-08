
$(document).ready(function(){

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(".con2").offset().top
        if(winst>=con2top){
            $(".con2").addClass("on")
        }else{
            $(".con2").removeClass("on")
        }
    })

    // $(".wrap>div").click(function(){}) 아래와 결과 동일

    $(".wrap>div").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40
        }else{
            delta = E.wheelDelta
        }
        // 브라우저의 호환성을 맞추기 위한 방법 
        // firefox = detail , chrome = wheelDelta
        
        if($(this).next().length!=0 && $(this).prev().length!=0){}
        
        if(delta<0){
            // 마우스 휠을 내렸을 때
            // console.log("마우스 휠을 내렸습니다.")

            // 이전형제나 다음형제가 없을경우 에러가 나지않게 처리
            if($(this).next().length!=0){ 
                let posTop = $(this).next().offset().top            
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }   

        }else{
            // 마우스 휠을 올렸을 때
            // console.log("마우스 휠을 올렸습니다.")

            if($(this).prev().length!=0){
                let posBottom = $(this).prev().offset().top            
                $("html,body").stop().animate({scrollTop:posBottom},1000)
            }           

        }
        return false // 그 즉시 종료, 이벤트 한번만 적용됨

    })

})