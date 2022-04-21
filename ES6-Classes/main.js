// ES6 Classes

// 예제. 1
// const heropy = {
//   name: 'Heropy',
//   normal () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// 예제. 2
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// 클래스를 이용한 문법 정리
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())
