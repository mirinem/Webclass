$(document).ready(function(){
    
    $(".list>li").each(function(){
        // console.log($(this)) // 여기서 this는 각각의 list 태그들을 의미
        let red = Math.random()*255;
        let green = Math.random()*255;
        let blue = Math.random()*255;
        $(this).css("background","rgb("+red+","+green+","+blue+")")


        let tagTop = $(this).offset().top
        $(this).text("저는 전체문서기준 위에서 "+tagTop+"만큼 떨어지는 곳에 있습니다.")

        $(this).addClass("on")
    })

})