$(document).ready(function(){

    $(window).scroll(function(){
        
        let winscroll = $(this).scrollTop();
        let targetTop = $(".main-content").offset().top
        let distance = winscroll - targetTop
        let targetHeight = $(".main-content").height()
        let areaHeight = $(".movingArea2").height()

        // console.log(winscroll,targetTop,distance,targetHeight,areaHeight)

        if(distance<0){
            $(".movingArea2").css("position","absolute")
            $(".movingArea2").css("left","0")
            $(".movingArea2").css("top","0")
        }
        if(distance>=0 && distance <= targetHeight-areaHeight){
            $(".movingArea2").css("position","fixed")
            $(".movingArea2").css("left","0")
            $(".movingArea2").css("top","0")
            // console.log(distance)
            let count = distance / ((targetHeight-areaHeight)/8)
            let idx = Math.floor(count)
            let idx_per = count-idx
            let idx_per2 = 1-idx_per
            console.log(idx,idx_per)

            let conHeight = $(".movingArea2>li").eq(idx).find(".b_content").height()
            console.log(conHeight)
            $(".movingArea2>li").eq(idx).css("height",(idx_per*conHeight)+42+"px")
            if(!(idx-1<0)){
                $(".movingArea2>li").eq(idx-1).css("height",(idx_per2*conHeight)+42+"px")
            }            


        }
        if(distance > targetHeight-areaHeight){
            $(".movingArea2").css("position","absolute")
            $(".movingArea2").css("left","0")
            $(".movingArea2").css("top",(targetHeight-areaHeight)+"px")
        }

    })
})