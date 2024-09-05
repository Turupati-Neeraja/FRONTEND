//--------------------------------ARROW---CONSTRUCTOR----------------------------//
function sum1(a,b)
{
    return a+b
}

let sum2=(a,b) =>  a+b

function isPositive(number)
{
    return number>=0
}
let isPositive1 = number => number>=0

function rand()
{
    return Math.random
}

let raa = () => Math.random

document.addEventListener('click', function ()
{
    console.log('click')
})

document.addEventListener('click', () => console.log('click'))

//------------------------------------------------------------------//
class Person
{
    constructor(name)
    {
        this.name = name
    }
    printNameArrow() // it does not define or replace //
    {
        setYimeout(() => {
            console.log('Arrow:' + this.name)
        },100)
    }
    printNameFunction()          // it redefine //
    {
        setTimeout(function(){
                console.log('function:' +this.name)
            },100)
    }
}

let person =new Person('Bob')
person.printNameArrow()      // it prints----- Arrow : BOb  //
person.printNameFunction()   // it doesnot prints ----Function : //
console.log(this.name)       // This is a golbal scope it redefines //