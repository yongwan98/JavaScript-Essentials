import getType from "../getType";


console.log(typeof 123)
console.log(typeof '가나다')
console.log(typeof false)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])
console.log('-------------')

console.log(getType(123))
console.log(getType('가나다'))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))