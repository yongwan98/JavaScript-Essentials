// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const heropy = new user('Heropy', 'Park')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
