$(document).ready(function(){

    let count = 0;
    
    let perView;
    let stationWidth;
    let trainWidth;
    
    let winWidth = $(window).width()

    perView = 2
    stationWidth = $(".station").width()
    trainWidth = stationWidth * 5 / perView
    $(".train").width(trainWidth)

  

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



    // 이미지 클릭시 이미지 변환 - 이미지 경로 바꾸기
    let change = $("img");
    
    $(change).click(function(){
        if($(this).hasClass("on")==false){
            $(this).addClass("on")
            let imgsrc = $(this).attr("src")
            let changedsrc = imgsrc.replace(".jpg","_hid.jpg")
            $(this).attr('src',changedsrc);
        }else{
            $(this).removeClass("on")
            let imgsrc = $(this).attr("src")
            let changedsrc = imgsrc.replace("_hid.jpg",".jpg")
            $(this).attr('src',changedsrc);           
        }
    })


})