window.onload = function(){
    let title = document.querySelector("#title")
    title.style.color = "blue"

    let titleParent = title.parentElement
    titleParent.style.border = "1px solid blue"

    let ulTag = document.querySelector(".list")
    let list = ulTag.children
    for(let i=0;i<list.length ;i++){
        list[i].style.borderBottom = "1px solid black"
    }

    // 선택한 태그의 다음형제태그 선택, 연달아서 메서드 사용가능
    title.nextElementSibling.style.background = "lightblue"
    list[0].nextElementSibling.nextElementSibling.style.color = "red"

    // 선택한 태그의 이전형제태그 선택
    ulTag.previousElementSibling.style.textDecoration = "underline"
    console.log(list[0].nextElementSibling.previousElementSibling.parentElement)
}
