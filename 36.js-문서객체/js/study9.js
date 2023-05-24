
window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainList = train.children  // train의 자식들을 새로 만들어진 변수에 저장
    let count = 0  // 지역변수가 되면 count 실행 할때마다 0으로 이동된다.

    // let pagination = document.querySelector(".pagination")
    // let pagiList = pagination.children
    let pagiList = document.querySelectorAll(".pagination>li")

    nextBtn.addEventListener("click",function(){           
        
        // train클래스를 선택해서 왼쪽으로 500픽셀 이동 
        count++   // 변수: 클릭 수   
        if(count>3){count=0} //조건 참이면 실행, 거짓이면 종료
        train.style.transform = "translateX(-"+25*count+"%)" 

        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pagiList[i].classList.remove("on")
        }        
        trainList[count].classList.add("on") 
        pagiList[count].classList.add("on")   
                         
    })    
    

    prevBtn.addEventListener("click",function(){       

        count--
        if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)` 

        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pagiList[i].classList.remove("on")
        }        
        trainList[count].classList.add("on") 
        pagiList[count].classList.add("on")    
        
    })


    for(let k=0;k<trainList.length; k++){
        pagiList[k].addEventListener("click",function(){

            count = k  // 순번에 맞는 인덱스를 카운트변수에 저장한다.
            for(let i=0; i<trainList.length; i++){
                trainList[i].classList.remove("on")
                pagiList[i].classList.remove("on")
            }
            trainList[k].classList.add("on")
            pagiList[k].classList.add("on")
    
            train.style.transform = `translateX(-${25*k}%)`
        })
    }
    


}