
// 제이쿼리서 window.onload = function(){}와 같은 역할을 한다.
// 실행은 동작을 표현하는 익명함수
$(document).ready(function(){
    // 문서가 쭉 읽힌 뒤 실행될 소스코드
    $("p").css("color", "green")
    $("p").css("font-weight", "bold")
    $("p").css("color", "navy").css("font-weight", "normal")
    // 체인처럼 연결한다는 체이닝기법으로도 매서드를 활용할 수 있다.

    $(".naverLink").attr("href","https://www.naver.com/")
    let link = $(".naverLink").attr("href")
    console.log(link)

    $(".textframe>p:nth-of-type(1)").text("<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.")
    // $(".textframe>p").html("<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.")
    let textP = $(".textframe>p:nth-of-type(2)").text()
    console.log(textP)

    $("#a").addClass("on")
    // document.querySelector("#a").classList.add("on")
    $("#a").removeClass("on")
    // document.querySelector("#a").classList.remove("on")

    $(".list>li").css("border-bottom","1px solid black")
    $(".list").children().css("color", "blue")
    $(".list").parent().css("background", "skyblue")
    $(".list>li:nth-of-type(2)").next().css("text-align", "center")
    $(".list>li:nth-of-type(2)").prev().css("text-align", "right")
    //let listArray = document.querySelector(".list").children
    // for(let i= 0 ; i<listArray.length ; i++){
    //     listArray[i].style.color = "red"
    // }

    let num = Number(prompt("몇 번째 리스트를 활성화하겠습니까?"))
    
    $(".listNum>li").eq(0).css("color", "red")

})
