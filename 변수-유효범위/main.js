// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
    // console.log(a) => const,let일 경우 error
    if (true) {
    // console.log(a) => const,let일 경우 undefined
    // console.log(a) => var일 경우 undefined
    const a = 123
    console.log(a)
  }
  // console.log(a) => const,let일 경우 error
  // console.log(a) => var일 경우 123
}

scope()