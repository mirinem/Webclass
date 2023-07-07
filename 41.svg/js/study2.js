$(document).ready(function(){

    $(".btn").click(function(){
        if($(this).parent().hasClass("on")==false){
            $(this).parent().addClass("on")

            let per = Number($(this).parent().children("figure").children(".per").text())
            let circle = $(this).parent().find("circle")
            // circle.css("stroke-dashoffset",314-(314*(per/100)))
            // circle 값을 밖에 따로 쓰면 count 올라가는 속도와 다르게 진행된다. 
    
            let percentTag = $(this).parent().find(".per")
            let count = 0;
            let timer = setInterval(function(){
                count++
                circle.css("stroke-dashoffset",314-(314*(count/100)))
                percentTag.text(count+"%")
                if(count>=per){
                    clearInterval(timer)
                }
    
            },10)
        }

    })
})