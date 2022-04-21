// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// 예제. 1
// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }
// amy.normal()
// amy.arrow()


// 예제. 2
// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow()


// 예제. 3
const timer = {
  name: 'Heropy!!',
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  } 
}
timer.timeout()