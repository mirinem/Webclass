$(document).ready(function(){


    let pathLength = $("#progress path").get(0).getTotalLength()
    // get() 자바스크립트 문서 객체 변환
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)


    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let fixedTop = $(".fixedFrame").offset().top // 0~7200까지 증가하는 숫자
        let distance = winTop-fixedTop
        let movingAreaHeight = $(".movingArea").height()


        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }else if(distance>=0 && distance<=8000-movingAreaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")

            let ratio = distance/(8000-movingAreaHeight) // 전체 애니메이션 구간길이 대비 스크롤한 거리비율 0~1까지의 수로 표현

            let percent = (ratio*100) // 0~100까지의 수
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")

            let percent2 = (ratio*87.5) // 0~87.5까지의 수-칸당 12.5%
            $(".train").css("transform","translateX(-"+percent2+"%)")

            // let count = Math.floor(distance/(8000-movingAreaHeight)*8) // 0~7사이의 정수
            // let count2 = (distance/(8000-movingAreaHeight)*8)-count // 0~1사이의 소수
            // console.log(count+"번째 리스트의 애니메이션이 "+count2+"%만큼 진행되었습니다.")
            // $(".train>li").removeClass("on")
            // $(".train>li").eq(count).addClass("on")

            let count = (percent2/(100/8))
            let idx = Math.round(count)
            console.log(idx,count)
            $(".train>li").removeClass("on")
            $(".train>li").eq(idx).addClass("on")
            $(".train>li").eq(idx).find("b").css("transform","rotateY("+((count*2)*180)+"deg)")

        }else if(distance>8000-movingAreaHeight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(8000-movingAreaHeight)+"px")
        }
    })


})