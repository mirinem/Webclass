
window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainList = train.children  // 드레인의 자식들을 새로 만들어진 변수에 저장
    let count = 0

    nextBtn.addEventListener("click",function(){           
        
        // train클래스를 선택해서 왼쪽으로 500픽셀 이동 
        count++   // 변수: 클릭 수   
        if(count>3){count=0} //조건 참이면 실행, 거짓이면 종료
        train.style.transform = "translateX(-"+25*count+"%)" 
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
        }
        
        trainList[count].classList.add("on")       
                         
    })
    
    prevBtn.addEventListener("click",function(){       

        count--
        if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)` 
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
        }
        
        trainList[count].classList.add("on")               
                         
    })




}