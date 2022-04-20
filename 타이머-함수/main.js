// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// // setTimeout함수를 사용해 3초 뒤에 콘솔에 YongWan!을 출력한다.
// const timer = setTimeout(() => {
//   console.log('YongWan!')
// }, 3000)

// const btnEl = document.querySelector('button')

// // clearTimeout함수를 사용해 button을 클릭하면 setTimeout함수가 종료된다.
// btnEl.addEventListener('click', () => {
//   clearTimeout(timer)
// })

// setInterval함수를 사용해 3초마다 콘솔에 YongWan!을 출력한다.
const timer = setInterval(() => {
  console.log('YongWan!')
}, 3000)

const btnEl = document.querySelector('button')

// clearInterval함수를 사용해 button을 클릭하면 setInterval함수를 종료된다.
btnEl.addEventListener('click', () => {
  clearInterval(timer)
})