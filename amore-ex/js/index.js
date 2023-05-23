window.onload =function(){

    // let dtList = document.querySelectorAll(".bannerTabMenu>dt")

    // for(let i = 0; i<dtList.length; i++){
    //     dtList[i].addEventListener("click",function(){

    //         for(let j=0; j<dtList.length; j++){
    //             dtList[j].classList.remove("on")
    //         }
    //         this.classList.add("on")
    //     })
    // }

    // let dtList2 = document.querySelectorAll(".tabMenu>dt")

    // for(let i = 0; i<dtList2.length; i++){
    //     dtList2[i].addEventListener("click",function(){

    //         for(let j=0; j<dtList2.length; j++){
    //             dtList2[j].classList.remove("on")
    //         }
    //         this.classList.add("on")
    //     })
    // }


    //공식(똑같은 동작)은 같은데 재료만 다르다 - 함수이용 / 매개변수 꼭 넣기!!!
    function tab(classname){ //정의부
        let tab = document.querySelectorAll("."+classname+">dt")

        for(let i = 0; i<tab.length; i++){
            tab[i].addEventListener("click",function(){

                for(let j=0; j<tab.length; j++){
                    tab[j].classList.remove("on")
                }
                this.classList.add("on")
            })
        }
    }
    tab("bannerTabMenu") //실행부, 호출부(사용)
    tab("tabMenu")
}