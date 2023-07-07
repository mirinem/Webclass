$(function(){
    $(window).scroll(function(){
        
        let winscroll = $(this).scrollTop();
        let targetTop = $(".fixedFrame").offset().top
        let distance = winscroll - targetTop
        let targetHeight = $(".fixedFrame").height()
        let areaHeight = $(".movingArea").height()

        // console.log(winscroll,targetTop,distance,targetHeight,areaHeight)

        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("top","0")
        }
        if(distance>=0 && distance <= targetHeight-areaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("top","0")
            // console.log(distance)
            let count = distance / ((targetHeight-areaHeight)/4)
            let idx = Math.floor(count)
            let idx_per = count-idx
            console.log(idx,idx_per)

            let conHeight = $(".movingArea>li").eq(idx).find(".contents").height()
            console.log(conHeight)
            $(".movingArea>li").eq(idx).css("height",(idx_per*conHeight)+50+"px")


        }
        if(distance > targetHeight-areaHeight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("top",(targetHeight-areaHeight)+"px")
        }

    })

    


})