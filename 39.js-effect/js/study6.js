$(document).ready(function(){

    let count = 0;
    $(".btnNext").click(function(e){
        e.preventDefault() //클릭했을 때 a태그의 기본 본능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count++;
        if(count>4){count=0;}
        $(".train").css("transform","translateY("+(-20*count)+"%)")
    })
  

    $(".btnPrev").click(function(e){
        e.preventDefault() 
        count--;
        if(count<0){count=4;}
        $(".train").css("transform","translateY("+(-20*count)+"%)")
    })
    
    // 자동슬라이드
    let timer = setInterval(function(){
        count++;
        if(count>4){count=0;}
        $(".train").css("transform","translateY("+(-20*count)+"%)")
    },2000)

    // 마우스 올릴 시, 자동슬라이드 정지
    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    // 마우스 뺐을 시, 자동슬라이드 다시 재생
    $(".station").mouseout(function(){
        timer = setInterval(function(){
        count++;
        if(count>4){count=0;}
        $(".train").css("transform","translateY("+(-20*count)+"%)")
        },2000)
    })
})