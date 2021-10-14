/*function sayHiTo (name){
    const msg = 'hi' + name
    return function (){
        console.log (msg)
    }
}

const sayHiToElena = sayHiTo ('Elena')
const sayHiToLesha = sayHiTo ('Lesha')
sayHiToElena ()

sayHiTo('Elena') () // the same result

sayHiToLesha ()
*/
/*
function createFrameworkManager () {
    const frameworks = ['Angular','React']
    return {
        print: function () {
            console.log (frameworks.join(' '))
        },
        add: function (framework){
            frameworks.push (framework)
        }
    }
}

const manager = createFrameworkManager ()
console.log (manager)
manager.print()
manager.add('VueJS')
manager.print()*/


// setTimeout

/*
const fib = [1,2,3,5,8,13]

for (let i = 0; i < fib.length; i++){
    (
        function (j){
            setTimeout(()=>{
                console.log(`fib ${j} = ${fib[j]}`)
            },1500)
        }
    )(i)

}*/