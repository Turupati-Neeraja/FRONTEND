//------------------VAR, LET, CONSTANT ------------------------//

//Global Execution Content or window or js can use a value before its initialization. this is called Hoisting
/* var is used in olden times till Es2015/Es6, then we started using let or const */
/* it will instantiate the vaiables in temporal dead zone*/
/* let and cost values cannot be accesses before initialization*/
 

//var
console.log(a)   //undefined    //Hoisting --- before declaring it stores default value//
var a=50;
console.log(a)   //50
var a=67      
console.log(a)   //67    // its reassigning and redeclaring the value//
a=70
console.log(a)   //70

var k=30;
function num()     //function scoped
{
   if(true)
   {
        var k = 55;
        console.log(" k is", k)      //55
   }
   console.log(" k is", k)          //55
}
num()

//------------------------------------------------------------------//

//let
console.log(b)     //Cannot access 'b' before initialization
let b=20;
console.log(b)    //20
let b=30;
console.log(b)    //undefined cannot be redeclare
b=40;
console.log(b)   //40 //but can reassign

function num()     //block scoped
{  
   if(true)
   {  
        let v=40;
       console.log("v is", v)
   } 
}
num()        //40

//------------------------------------------------------------------//

//const

console.log(c)     //Cannot access 'b' before initialization
const c=20;
console.log(c)    //20
const c=30;
c=20;
console.log(b)    //undefined cannot be redeclare or reassign

function num()     //block scoped
{  
   if(true)
   {  
        const v=40;
       console.log("v is", v)
   } 
}
num()        //40
