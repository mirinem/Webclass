$(document).ready(function(){

    let count = 0;
    
    let perView;
    // train클래스 너비를 변경 => train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;
    
    // 최초의 문서가 완성 됐을 떄, 한번 실행되도록
    let winWidth = $(window).width()

        if(winWidth>=1024){
            console.log("pc사이즈입니다")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
           
        }else if(winWidth>=768){
            console.log("태블릿사이즈입니다")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)

        }else{
            console.log("모바일사이즈입니다")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)

        }

   

    // 화면사이즈가 줄어들 때 실행
    $(window).resize(function(){

        let winWidth = $(window).width()
        // console.log(winWidth)

        if(winWidth>=1024){
            console.log("pc사이즈입니다")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
           
        }else if(winWidth>=768){
            console.log("태블릿사이즈입니다")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)

        }else{
            console.log("모바일사이즈입니다")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)

        }

    })


    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        // 기차가 왼쪽으로 500픽셀
        if(count>4){count=0}
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        count--
        e.preventDefault()
        if(count<0){count=4} // 예외처리
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
    moveSlider(2)
})