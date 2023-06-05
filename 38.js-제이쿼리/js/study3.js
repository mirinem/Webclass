$(document).ready(function(){

    // 문서가 다 읽힌 뒤 실행되는 코드

    // 1. btn1클래스 버튼을 클릭하면
    // 2. textFrame클래스 태그가 선택되서 글씨가 파란색이 되도록

    $(".btn1").click(function(e){
        e.preventDefault()  // 설개한 태그가 갖는 기본기능을 억제함.
        // 버튼1클래스를 클릭했을 때 실행되는 소스코드
        $(".textFrame").css("color", "blue")

    })

    // document.querySelector(".btn1").addEventListener("click", function(){
    //     document.querySelector(".textFrame").getElementsByClassName.color = "blue"
    // })

    // 1.textFrame클래스 태그에 마우스를 올리면
    // 2.textFrame클래스 태그에 밑줄스타일이 들어갈 수 있도록

    $(".textFrame").mouseover(function(){
        // $(".textFrame").css("text-decoration","underline")
        $(this).css("text-decoration","underline")
        // 가리키는 태그 대상이 같다면, this로 표현가능하다.
    })
    

    // 1.textFrame클래스 태그에서 마우스를 바깥으로 빼면
    // 2.textFrame클래스 태그에 밑줄스타일이 없어지도록

    // 실행에 익명함수를 사용하는 이유는 그 즉시 바로 실행하기 위해서다.

    $(".textFrame").mouseout(function(){
        // $(".textFrame").css("text-decoration","none")
        $(this).css("text-decoration","none")
    })
















})