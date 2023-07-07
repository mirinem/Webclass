$(document).ready(function(){
    
    // 버튼 클릭시 메뉴바 열리게
    let MenuState = false;
    $(".menuTab").click(function(){

        
        if(MenuState==false){
            // 메뉴가 현재 닫혀있는 상태 -> 여는기능
            $(".menuTab").addClass("closed")
            $(".menu").addClass("on")
            MenuState =true
        }else{
            // 메뉴가 현재 열려있는 상태 -> 닫는기능
            $(".menuTab").removeClass("closed")
            $(".menu").removeClass("on")
            MenuState =false
        }
            
    })


    // (PC) 상단 메뉴바 스크롤 시 변화
    $(function(){

        
        let prevScrollTop = 0;
      
        document.addEventListener("scroll", function(){            
            let nowScrollTop = $(window).scrollTop();

            if (nowScrollTop > prevScrollTop){
                $("header").removeClass('up');  
            }else {
                $("header").addClass('up'); 
                $(".menu").addClass('up'); 
            } 

            prevScrollTop = nowScrollTop; 

            if(nowScrollTop > 500){
                $("header").addClass("down")
            }else{
                $("header").removeClass("down")
                $("header").removeClass('up');
                $(".menu").removeClass('up'); 
            }
      
        });

              
    })

    
    // 스크롤시 화면이동 및 원 스케일 확대
    $(window).scroll(function(){

        let winTop = $(window).scrollTop() //화면기준 위에서 얼만큼 떨어졌나
        let fixedTop = $(".fixedFrame").offset().top // 0~약 3000까지 증가하는 숫자
        let distance = winTop-fixedTop
        let movingAreaHeight = $(".movingArea").height()


        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }else if(distance>=0 && distance<=4000-movingAreaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")

            let ratio = distance/(4000-movingAreaHeight) // 전체 애니메이션 구간길이 대비 스크롤한 거리비율 0~1까지의 수로 표현
            // console.log(ratio)        
            
            // 세로슬라이드말고 fadein-out으로 살리기
            let count = Math.floor(distance/2000)
            console.log(count)
            moveSlider(count)
            
            // if(count==1){
            //     textAni(".p1",{
            //         effect:"fadeInOut",
            //         textSize:"64px"
            //     })
            //    textAni(".p2",{
            //         effect:"fadeInOut",
            //         textSize:"64px"
            //     })



            // }


            // 원 스케일 확대
            let percent = ratio*7
            // 0~7까지의 수            
            $(".circle").css("transform","translate(-50%, -50%) scale("+(1+percent)+")")


            // 스크롤 시 작아지는 글자크기 
            let count2 = (ratio*52)
            // console.log(count)
            $(".intro>p").css("font-size",""+(52-(count2*2))+"px")
            $(".intro>p").css("opacity",""+(1-(ratio*2))+"")
            $(".intro2>p").css("opacity",ratio)                             


        }else if(distance>4000-movingAreaHeight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(4000-movingAreaHeight)+"px")
            

        }
    })

    function moveSlider(idx){
        $(".intro_train>li").removeClass("on")
        $(".intro_train>li").eq(idx).addClass("on")
    }


    // 언어 및 프로그램 실력 클릭 창 
    $(".skill>ul>li").click(function(){
        let list = $(this)

        if($(this).hasClass("on")==false){
            // 활성화 됐을 때,
            $(this).css("height","200px")
            $(this).addClass("on")            
            let percent = Number($(this).find("i").text())
            // console.log(percent)
            // drawStroke($(this),percent)

            // 다시 반복
            let percentTag = $(this).find("i") // html에서 태그를 나눈이유는 글자로 인식되지 않고 숫자로 인식되기 위함이다. 
            let count = 0;
            let timer = setInterval(function(){
                count++
                drawStroke(list,count) // 함수에 맞게 들어가는 수를 바꿔야한다.
                percentTag.text(count) 
                if(count>=percent){
                    clearInterval(timer) 
                    return;                             
                }               
    
            },10)                   

        }else{
            // 비활성화 됐을 때,
            $(".skill>ul>li").css("height","100px")
            $(".skill>ul>li").removeClass("on")
            $(this).removeClass("on")
            initStrokeDrawing(this)         

            // 초기화
            let percent2 = Number($(this).find("i").text()) // 고로 여기도 숫자만 잡히게 원래 수로 초기화하면된다.
            
        }
            
    })


    function initStrokeDrawing(target){
        let list = $(target)
        let pathLength = list.find(".c2").get(0).getTotalLength()
        $(target).find(".c2").css("stroke-dasharray",pathLength)
        $(target).find(".c2").css("stroke-dashoffset",pathLength)
    }

    function drawStroke(target,percent){
        let pathL = target.find(".c2").get(0).getTotalLength()
        target.find(".c2").css("stroke-dashoffset",pathL - (pathL*percent/100))
    }
    
    $(".skill>ul>li").each(function(){
        initStrokeDrawing(this)
    })


    // 스크롤 시 팝업 슬라이드 이동
    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let fixedTop = $(".fixedEffect").offset().top 
        let distance = winTop-fixedTop
        let movingAreaHeight = $(".movingStation").height()


        if(distance<0){
            $(".movingStation").css("position","absolute")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top","0")
        }else if(distance>=0 && distance<=7760-movingAreaHeight){
            $(".movingStation").css("position","fixed")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top","0")

            let ratio = distance/(7760-movingAreaHeight) // 전체 애니메이션 구간길이 대비 스크롤한 거리비율 0~1까지의 수로 표현

            
            let percent2 = (ratio*(100 - (100 / 8 * 2.5))) // 0~87.5까지의 수-칸당 12.5%, 화면상 보이는 수가 2.5이므로 곱한값을 빼준다.
            console.log(percent2)
            $(".train").css("transform","translateX(-"+percent2+"%)")



        }else if(distance>7760-movingAreaHeight){
            $(".movingStation").css("position","absolute")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top",(7760-movingAreaHeight)+"px")
        }
    })


    // 배너 이미지 클릭시 이미지 변환 - 이미지 경로 바꾸기
    let change = $(".b_content>img");
    
    $(change).click(function(){
        if($(this).hasClass("on")==false){
            $(this).addClass("on")
            let imgsrc = $(this).attr("src")
            let changedsrc = imgsrc.replace(".png","_hid.png")
            $(this).attr('src',changedsrc);
        }else{
            $(this).removeClass("on")
            let imgsrc = $(this).attr("src")
            let changedsrc = imgsrc.replace("_hid.png",".png")
            $(this).attr('src',changedsrc);           
        }
    })


    
    // 내용 나타나기
    // $(".flotxt3>ul>li").each(function(){
    //     $(this).addClass("downup")        
    // })


    $(window).scroll(function(){
        let winst = $(window).scrollTop() 
        let winHeight = $(window).height()*0.6 // 브라우저화면의 높이를 계산

        $(".mltr,.mrtl,.downup,.blind").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })


    // 서브페이지 자동 슬라이드
    let count = 0;
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".sub_train").css("transform","translateY("+(-33.333*count)+"%)")
    },2000)


    // 하단 top 버튼 
    $(".topBtn").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })


    // 클릭 시 각각의 메뉴리스트로 이동
    $(".gnb>li>a").click(function(e){
        e.preventDefault()

        let target = $(this).attr("href")
        
        // 클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.
        // (문자데이터형태로 "#s1" "#s2" ...)
        let target_top = $(target).offset().top        
        
        moveScroll({top:target_top,speed:1500})
    })

    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }


    $(".styleBtn").click(function(e){
        e.preventDefault()
        $(".stylePopup").addClass("on")
    })

    $(".closedBtn,.closedBtn2").click(function(){
        $(".stylePopup").removeClass("on")
    })

})