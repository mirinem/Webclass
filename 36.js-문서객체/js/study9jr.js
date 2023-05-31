
$(document).ready(function(){


    let count = 0;
    // 다음버튼을 눌렀을 때
    $(".btnNext").click(function(){
        count++;
        if(count>3){count=0}

        // $(".train").css("transform","translateX(-"+(count*25)+"%)")
        slideMove(count)

        $(".pagination>li").removeClass("on")
        $(".train>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
        $(".train>li").eq(count).addClass("on")
    })

    // 이전버튼을 눌렀을 때
    $(".btnPrev").click(function(){
        count--;
        if(count<0){count=3}

        // $(".train").css("transform","translateX(-"+(count*25)+"%)")
        slideMove(count)

        $(".pagination>li").removeClass("on")
        $(".train>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
        $(".train>li").eq(count).addClass("on")

    })

    // 반복되는 동일한 태그식을 함수로 정리한다.
    function slideMove(idx){
        $(".train").css("transform","translateX(-"+(idx*25)+"%)")
    }


    $(".pagination>li").click(function(){
                
        let count = $(this).index()

        $(".pagination>li").removeClass("on")
        $(".train>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
        $(".train>li").eq(count).addClass("on")

        
        $(".train").css("transform","translateX(-"+(count*25)+"%)")
    })


})