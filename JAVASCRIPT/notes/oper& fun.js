//--UNINARY---FUNCTIONS---NESTED FUNCTION---CALLBACK FUNCTION---CLOSURE FUNCTION--//


//  UNARY OPERATOR:
//unary plus ==> used to convert any value into  number
console.log(+1,+'',+true, +'prasad');
a=25;
console.log(a)
++a and a++;
console.log(a)
a-- and --a;
console.log(a)

//there are two way increment or decrement happens, oone is pre increment another is post increment
//++a is pre increment, a++ is post ==> pre increment first update the value and returens , post increment first returens the value and updates.

var b=12;
var x= ++b + b++ -b++ + ++b;  //13 +13 -14 + 16

Eg : console.log(`Addition is  ${(a + b)}`)
console.log(`subtraction is `+(a-b))
console.log("multiplication is" + (a * b))
console.log("division is " + (a / b))
console.log("remainder is " + a % b)
console.log("power is "+ 2^3)

//------------------------------------------------------------------//
//FUNCTIONS://
//In JS function is called as First class Citizen of JS//
//TASK-1: write a function sum--> take two values inside sum and alert their sum and call the function//

Global Variables  < local Variables 
//Global Variables
var a = 20, b = 30; //Global Variables
function sum() 
{
    console.log(a+b)    //50
}

//local variables 
function sub() 
{
    var a = 10, b = 20;  //local variables 
    console.log(a-b)    //10
}
sub()

//WITH PARAMETERS
function sum2 (a, b)
{
    console.log(a+b)
}
sum2(3, 5)

//BY USING RETURN
function sum3 (a, b)
{
    return a + b;
}
var result = sum3(5, 6);
console.log(result)

//task2: write functions sum,sub,mul,div for respective operations with two parameters, return their values and print them
a=5,b=50;
function sum(a,b)
{
    return a+b;
}
sumres=sum(a,b);
function sub(a,b)
{
    return a-b;
}
subres=sub(a,b);
function mul(a,b)
{
    return a*b;
}
mulres=mul(a,b);
function div(a,b)
{
    return a/b;
}
divres=div(a,b);
console.log(sumres)
console.log(subres)
console.log(mulres)
console.log(divres)

//task3: write a function which accepts a string and a number and returns the character of that number in string
//Input:"My name is Prasad",4
//Output:n
//Input2:"PRASAD",3
//Output:A
function finding(str)
{
   str="My name is Neeraja Turupati"
   return str.indexOf()[0];
}
result= finding(str);
console.log(result);

//task4: write a function to accept a number as radius and return area of circle.(HInt: area of circle is pi r square)
function area()
{
    r=4.5;
    area_of_circle=Math.PI *r*r
    console.log(area_of_circle)
}
area() //63.62

//--------------------------------------------------------------//
//debugger -- to see how the flow works
function msg ()
{
    debugger;
    console.log("Hello World");
}
debugger;
msg()        //Hello World

//eg
//it prints whole function
console.log(msg)    //function msg (){ debugger; console.log("Hello World");} debugger; msg()

//---------------------------------------------------------------//
//function expression
var x= function y()   //var x = function() //Both returns same
{
    console.log("hello world")
}
console.log(x)    //it prints the whole function
console.log(x())  //hello world

var x= function ()   //a function can be called without a name  called as anonymous function
{
    console.log("hello world")
}
console.log(x)    //it prints the whole function
console.log(x())

//write an anonymous function which returns square of a number
var square = function (num)
{
    return num*num
}
console.log(square)
var res = square(5)
console.log(res)

//Function called itself is called as
//IIFE(Immediate Invoke Function Expression)
( function()
  {
    console.log("hiiiiiii");
  }
)()       //hiiiiii

//Task5: create a function expression with a variable number area of rectangle, which takes two parameters(l,b) and return l*b 
function area(l,b)
{
    return l*b;
}
console.log(area(3,7))   //21

function number(l,b)
{
    return l*b;
}
area=number(5,7);
console.log(area)    //35

function number(l,b)
{
    l=3; b=7;
    return l*b;
}
area=number(Math.l*b);
console.log(area)     //21

function number(l,b)
{
    l=6; b=7;
    return Math.l*b;
}
area=number();
console.log(area)

//Task6: create a function which generates random 4 digits OTP and returns it, store it and print it)*/
function random()
{
    ret=Math.round(Math.random()*10000)
    console.log(ret)
}
random()         //2578

function random()
{
    return Math.round(Math.random()*10000)
}
otp=random(Math.round(Math.random()*10000))
console.log(otp)    //4586

//---------------------------------------------------------------//
//NESTED FUNCTION
function Outer()
{
    var x=10
    function Inner()
    {
        console.log("Inner function is" , x)
    }
    Inner()
    console.log("Outer function is", x)
}
Outer()    //Inner function is 10
           //Outer function is 10


function Outer()
{
    function Inner()
    {
        var x=10
        console.log("Inner function is" , x)
    }
    Inner()
    console.log("Outer function is", x)
}
Outer()        //Inner function is 10
               //Outer function is

function Outer()
{
    var x=10
    function Inner()
    {
        console.log("Inner function is" , x)
    }
    console.log("Outer function is", x)
}
Outer()      //Outer function is 10

//-----------------------------------------------------------------//
//Callback Function
function msg ()
{
    console.log("Hello World");
}
function callback(a, b, fun)
{
    fun();
    console.log(a+b)
}
callback(3,5,msg)

//Task7: write a HO fn which takes incr and decr as callbacks and use them*/
count= 5;
function incr()
{
    count++;
    console.log(count)
}
function decr()
{
    count--;
    console.log(count)
}
function call(fun1,fun2)
{
    fun1();
    fun2();
}
call(incr,decr)    //6,5

function decr(count)
{
    count--;
    console.log(count);
}
function incr(count)
{
    count++;
    console.log(count)
}
function c(fun1,fun2)
{
    fun1(5);
    fun2(6);
}
c(decr,incr)      //4,7

//----------------------------------------------------------------//
//CLOSURE FUNCTION = 
//Inner function can remenber outer function value even after outer function execution ended is called closure //
function outer()
{
    c=0;
    function inner()
    {
        c++;
        console.log(c)
    }
    return inner;
}
var x= outer()
console.log(x)
x()     //1
x()     //2
x()     //3
x()     //4

/*task8: take a callback function area into x and find the area by using radius inside x*/
function x ()
{
  radius=3;
  console.log(radius)
}
function circle(fun)
{
   fun();
   return Math.PI*radius*radius
}
circle(x)      //78

function x (fun)
{
  radius=3;
  fun(radius)
}
function area(a)
{
    console.log(Math.PI*radius*radius)
}
x(area)             //28






//-----------------------------------------------------------------------------//
//TASk-1
function sum(a,b)
{
    console.log(a+b)    
}
sum(2,3)

function sub(a,b)
{
    return a-b;
}
result=sub(2,4);
console.log(result) //-2

function sum3 (a, b)
{
    return a + b;
}
var result = sum3(5, 6);
console.log(result)   //11

function mul(a,b)
{
    return a*b;
}
result = mul(5,5);
console.log(result)   //25

function div(a,b)
{
    return a/b;
}
res=div(50,5);
console.log(res)   //10

function mul(a,b)
{
    console.log(a*b)
}
mul(2,5)        //10

//TASK-2
//arthematical Operations
a=5,b=50;
function sum(a,b)
{
    return a+b;
}
sumres=sum(a,b);
function sub(a,b)
{
    return a-b;
}
subres=sub(a,b);
function mul(a,b)
{
    return a*b;
}
mulres=mul(a,b);
function div(a,b)
{
    return a/b;
}
divres=div(a,b);
console.log(sumres)    //55
console.log(subres)   //-45
console.log(mulres)   //250
console.log(divres)   //0.1

//task3
//Finding the character with index by using slice method
function finding()
{
   str="My name is Neeraja Turupati"
   console.log(str.slice()[13])
}
finding()     //e
     
function slice()
{
   str="My name is Neeraja Turupati"
   return str.slice()[4];
}
result= slice(str);
console.log(result);  //a

//Finding the index with character by using IndexOf method
function index()
{
   str="My name is Neeraja Turupati"
   return str.indexOf('N');
}
result= index(str);
console.log(result);   //11


//TASK4:
function area()
{
    r=4.5;
    area_of_circle=Math.PI *r*r
    console.log(area_of_circle)
}
area() //63.62

function area()
{
    radius=4.5;
    return Math.PI *radius*radius;
}
result=area(Math.PI *radius*radius);
console.log(result);    //63.62

function task4 (str, num)
{
  return str.charAt(num-1)
}
var x=task4("PRASAD",4)
console.log(x)
function AREA (r)
{
    return Math.PI * r * r;
}
var x = AREA(7);
console.log(x);     //153.92

var square=function (num)
{
    return num*num;
}
console.log(square);
var res=square(5)
console.log(res);