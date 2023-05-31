window.onload = function(){
    // 문서를 끝까지 읽은 뒤 실행할 소스코드
    let menuState = false
    // 상태를 나타내는 변수
    let btnClose = document.querySelector(".btnMenu")
    let navTag = document.querySelector("nav")
    btnClose.addEventListener("click",function(){
        if(menuState == false){
            // 메뉴가 닫혀있는 경우 실행되는 코드
            btnClose.classList.add("close")
            navTag.classList.add("show")
            menuState = true
        }else{
            // 메뉴가 열려있는 경우 실행되는 코드
            btnClose.classList.remove("close")
            navTag.classList.remove("show")
            menuState = false
            // 상태까지 저장해야 실행가능하다. 상태를 표현할땐 boolean(false/true)이용
        }        
    })


    // 1번 방법
    // let btnClose = document.querySelector(".btnMenu")
    // btnClose.addEventListener("click",function(){
    //     btnClose.classList.add("close")
    // })

}