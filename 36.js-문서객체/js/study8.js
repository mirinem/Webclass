window.onload = function(){

    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
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

    for(let i=0; i<tabTitles.length; i++){
        tabTitles[i].addEventListener("click",function( ){
           
            for(let j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove("on")
            }
            this.classList.add("on")  // 여기서 this는 클릭한 리스트 
            tabDes.innerHTML = tabDescription[i]
            // 자바스크립트에 입력한 tabDescription의 내용을 html로 보내주는 매크로
        })
    }

}

