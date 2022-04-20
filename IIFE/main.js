// 즉시실행함수
// IIFE, Immeadiately-Invoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})();

// 호출 소괄호를 함수 내부에 넣는 것을 더 권장함
(function () {
  console.log(a * 2)
}());