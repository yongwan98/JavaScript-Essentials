// 형 변환(Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if(true) {
  console.log(123)
}
if(false) {
  console.log(123)
}
if('false') {
  console.log(123)
}

// const a = 1
// const b = '1'

// console.log(a === b)
// // 동등연산자 '=='를 사용하면 데이터 타입의 변환이 일어나
// // 의도치 않게 서로 다른데이터가 true값이 나올 수 있다.
// console.log(a == b)