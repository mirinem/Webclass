
$(document).ready(function(){

    $(".list>li").each(function(){
        let result = Math.round(Math.random())
        if(result){
            $(this).addClass("mltr")
        }else{
            $(this).addClass("downup")
        }
        
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 // 브라우저화면의 높이를 계산

        $(".mltr,.mrtl,.downup").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })

})