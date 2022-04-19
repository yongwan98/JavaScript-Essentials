// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  // 리스트를 숫자 1부터 보여주기 위해 i + 1을 했다.
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}