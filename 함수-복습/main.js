// 함수 복습

function sum0(x, y) {
  console.log(x + y)
}

sum0(1, 3)
sum0(4, 12)

// return 키워드를 통한 반환값을 변수에 저장
function sum1(x, y) {
  return x + y
}

const a = sum1(1, 3)
const b = sum1(4, 12)

console.log(a)
console.log(b)
console.log(a + b)

// 반환값을 변수에 담을 수도 있지만 직접 호출도 가능하다. 상황에 따라 효율적인 선택을 해야 한다.
console.log(sum1(1, 3))
console.log(sum1(4, 12))
console.log(sum1(1, 3) + sum1(4, 12))


// return키워드 활용 figma참조
function sum3(x, y) {
  if(x < 2) {
    return 123
  }
  return x + y
}

console.log(sum3(1,3))

// arguments객체 활용
function sum4() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum4(3, 4))