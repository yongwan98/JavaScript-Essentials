// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

// 함수표현식으로 작성하면 에러가 난다.
// double()
// const double = function () {
//   console.log(a * 2)
// }

// 함수선언식으로 작성하면 함수선언부가 최상단으로 올라와 실행된다 *figma참조
double1()
function double1 () {
  console.log(a * 2)
}