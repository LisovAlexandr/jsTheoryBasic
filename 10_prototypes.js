//__proto__
//Object.getPrototypeOf
/*
function Cat (name,color) {
    this.name = name,
    this.color = color
}

Cat.prototype.voice = function () {
    console.log (`${this.name} says meow`)
}

const cat = new Cat ('Tom','black')*/
/*console.log (Cat.prototype)
console.log (cat)
console.log (cat.__proto__ === Cat.prototype)  //true
console.log (cat.constructor)
*/
//cat.voice()


// ===============
/*
function Person (){}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person ()
person.name = 'Peter'

console.log ('skin' in person)  //check property in object
console.log(person.legs)
console.log(person.ice)
console.log(person.name)

console.log(person.hasOwnProperty('name')) //property in obj
console.log(person.hasOwnProperty('skim')) //property in prototype
*/
//Object.create
/*
const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)
*/
