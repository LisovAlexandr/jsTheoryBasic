// null undefiend boolean string number symbol object
/*
console.log(typeof 0)
console.log(typeof 'string')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof Symbol('JS'))
console.log(typeof null)

console.log(typeof function(){})
console.log(typeof NaN)*/

//type change
/*
let lang = 'JS'
if (lang){
    console.log('строка теперь boolean')
}
*/

//'', null, undefined, NaN, false

/*
console.log(Boolean ('')) //false
console.log(Boolean (' ')) //true
*/

//неявное преобразование

/*
console.log(1 + '2') //12 конкатенация
console.log('' - 1 + 0) //-1 для строк нет оператора вычитание
console.log('3' * 3) //9 для строк нет оператора умножение
console.log(3 + 3 + 'px') //6px
console.log(null + 3) //3
console.log(undefined + 3) // NaN
*/

// == vs ===
/*
console.log( 2 == '2')
console.log( 2 === '2')
console.log( undefined == null) //true
console.log( undefined === null) //false
*/
