// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// setTimeout를 호출할때 인수로 함수가 사용되었고 이를 콜백이라고 부른다.

function timeout(Callback) {
  setTimeout(() => {
    console.log('Hellow!')
    Callback()
  }, 3000)
}

timeout(() => {
  console.log('Yong Wan!')
})
// console.log('Yong Wan!')