// 화살표 함수
// () => {} vs function () {}

// 일반함수
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

// 화살표 함수
const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow: ', doubleArrow(7))

// 화살표 함수 축약형
const doubleArrow1 = x => x * 2
console.log('doubleArrow1: ', doubleArrow1(7))

// 화살표 함수 축약형 반환값 객체일 경우
const doubleArrow2 = () => ({ name: 'Yong' })
console.log('doubleArrow2: ', doubleArrow2())