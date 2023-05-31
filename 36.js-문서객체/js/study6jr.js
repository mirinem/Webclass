$(document).ready(function(){

    // 버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는기능
    // 버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 메뉴를 여는기능

    let menuState = false;

    $(".btnMenu").click(function(){
        // btnMenu클래스를 클릭했을 때 실행될 동작


        if(menuState==false){
            // 메뉴가 현재 닫혀있는 상태 -> 여는기능
            $(".btnMenu").addClass("close")
            $("nav").addClass("show")
            menuState =true
        }else{
            // 메뉴가 현재 열려있는 상태 -> 닫는기능
            $(".btnMenu").removeClass("close")
            $("nav").removeClass("show")
            menuState =false
        }



    })





})