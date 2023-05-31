
// 안에 들어가도 되고 안들어가도 된다.
let tabDescription = [
    `<h3>title1</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus enim culpa et nostrum voluptate assumenda voluptates maiores eveniet reiciendis corrupti sequi iste quis incidunt laborum, dicta ut eos esse sapiente?</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem tempore cumque minus blanditiis quia debitis obcaecati sequi, vero nobis soluta consequuntur earum facere omnis! Hic unde similique aspernatur ullam inventore.</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`
]

$(document).ready(function(){
    
    $(".tabTit>li").click(function(){
        $(".tabTit>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index() 
        //index()함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함      
        $(".tabDes").html(tabDescription[idx])
    })
    



})