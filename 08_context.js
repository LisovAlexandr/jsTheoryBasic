/*const person = {
    surname: 'Stark',
    knows: function(what,name){
        console.log(`You ${what} know, ${name} ${this.surname}`)
    }
}

person.knows('all', 'Bran')

const john = {
    surname: 'Snow'
}


// вызываем метод knows в контексте объекта john
person.knows.call(john, 'nothing', 'John')

person.knows.apply(john,['nothing2', 'John2']) // param in array

person.knows.call(john, ...['nothing4', 'John4']) //es6 feature, operator spread 

person.knows.bind(john,'nothing5', 'John5')()  // method return function, need () to call
*/
//=================

//create class in function
/*
function Person(name,age){
    this.name = name,
    this.age = age,

    console.log(this)
}

const elena = new Person('Elena',25)
*/
// ================  явная передача контекста
/*function logThis(){
    console.log(this)
}

const obj = {num: 42}

logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//========  неявная передача контекста
const animal = {
    legs: 4,
    logThis(){
        console.log(this)
    }
}

animal.logThis()*/

//======
/*
function Cat (color){
    this.color = color,
    console.log ('this', this)
    ;( ()=>{ 
        console.log ('Arrow this', this)
    })()
}

new Cat('red')*/