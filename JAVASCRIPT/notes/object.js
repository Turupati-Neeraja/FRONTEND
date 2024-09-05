//----------------------------------OBJECT----------------------------//

var obj={
    name:'raj',
    age:20,
    fun :function ()
    {
        console.log('hello')
    }
}
console.log(obj)
console.log(obj.name, obj['name'], obj.email)
obj.email = "abc@a.com"
console.log(obj.name, obj["name"], obj.email)
var obj2 = Object.create(obj)
console.log(obj2)
console.log(obj2, obj2.age)
var obj3 = Object.assign(obj)
console.log( obj3)
console.log( obj3.age)

/*---------------------CAll bACK FUNCTION------------------------//
callback- one function in another fun para */
function a(x,function b(y, function c(){
}
){
})
{  
}
//---Also called as call back hell/pyramid of doom 

/*-------------------------PROMISE CHAINING----------------------
--promises --> async.then.then.then.catch => promise chaining
--async-wait */