
function Dog(dogName,dogAge){
    this.name = dogName
    this.age = dogAge
    this.feel = Math.floor(Math.random()*3)
    this.say = function(){
        if(this.feel==0){
            document.write(`멍멍! 나는 ${this.name}다! 기분이가좋다 멍멍!!<br>`)
        }else if(this.feel==1){
            document.write(`${this.name}는 오늘 심심하군! 뭐 먹을거 없나~~멍~<br>`)
        }else{
            document.write(`${this.name}는 지금 굉장히 화가난다! 왈왈와왕!!아르르~~!!<br>`)
        }        
    }
    // return this 가 생략 
}
// let dog1 = new Dog("뽀삐",2)
// let dog2 = new Dog("흰둥이",4)

// ⬆ 위와 결과는 동일. 그러나 아래는 길게 반복된다.
// let dog1 = {
//     name:"뽀삐",
//     age:2,
//     say: function(){
//         document.write("멍멍!")
//     }
// }
// let dog2 = {
//     name:"흰둥이",
//     age:4,
//     say: function(){
//         document.write("멍멍!")
//     }
// }