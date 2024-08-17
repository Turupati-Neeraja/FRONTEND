//--------------ARRAY--------------------//
//Arrays: Arrays are used to collect different Items It is a non- primitive data type.

//Array METHODS//
//TASK1: take an array of 5 even numbers numbers and apply push,pop,shift,unshift and splice and print them after every operation
arr1=[1,2,3,4,5]
arr2=[1,2,3,4,5]
console.log(arr1==arr2); //false be ause the address are different.
console.log(arr1);     // [1, 2, 3, 4, 5]
console.log(arr2)     // [1, 2, 3, 4, 5]
arr3=[4,5,7,8]
arr3.push(6)
console.log(arr3)    //[4, 5, 7, 8, 6]
arr3.unshift(9)
console.log(arr3)    //[9, 4, 5, 7, 8, 6]
arr3.pop()
console.log(arr3)    //[9, 4, 5, 7, 8]
arr3.shift()
console.log(arr3)  //[4, 5, 7, 8]
arr3.splice(3,1,10,11,12,13)  //(index start , how many pop, adding elements from there)
console.log(arr3)    //[4, 5, 7, 10, 11, 12, 13]
arr3.splice(2,4,14) 
console.log(arr3)   // [4, 5, 14, 13]
arr3.splice(4,0,14) 
console.log(arr3)   //[4, 5, 14, 13, 14]
console.log(arr3.reverse())     //[14, 13, 14, 5, 4]
console.log(arr3.indexOf(13))    //3
console.log(arr3.lastIndexOf(14))   //4
var a= console.log(arr3.concat(arr1))    
console.log(a)                      //[4, 5, 14, 13, 14, 1, 2, 3, 4, 5]
console.log(a.sort())
console.log(a.copyWithin(2,6,8))    //[4, 5, 2, 3, 14, 1, 2, 3, 4, 5]
console.log(a.fill(10,3,7))         //[4, 5, 2, 10, 10, 10, 10, 3, 4, 5]

//the find returns element which is even number , it returns only element/
//find
//even number
b=[1, 5, 12, 3, 14, 1, 2, 32, 4, 5]
console.log(b.find(function(num)
{
     return num%2==0;
}))                           //12

//odd number
console.log(b.find(function(num)
{
     return num%2!==0;
}))                               //1

//less than 20 and greater than 10
console.log(b.find(function(num)
{
     return (num>10)&& (num<20)
}))                                 //12

//findindex
console.log(b.findIndex(function(num)
{
     return num%2==0;
}))                                 //[2]

//every
//less than 20 and greater than 10 it checks every element if even one element is false it returns false
c=[11,12,33,44,55]
console.log(c.every(function(num)
{
     return (num>10)&& (num<20)
}))                                  //false

//less than 100 and greater than 10 it checks every element if every element is true it returns tru
console.log(c.every(function(num)
{
     return (num>10)&& (num<100)
}))                                  //true

//includes (element,index)
console.log(c.includes(11))          //true
console.log(c.includes(22))          //false
console.log(c.includes(11,2))        //false
console.log(c.includes(12,1))        //true

//foreach ---It perform the fun but it doesnot return any value or any array
console.log(c.forEach(function (num)
{
    console.log(num+10)       //[21, 22, 43, 54, 65] 
    return num+10             //doesnot return
}))

//map ---It perform the fun but it return value and it creates new array
console.log(c.map(function (num)
{
    console.log(num+10)       //[21, 22, 43, 54, 65] 
    return num+10             //[21, 22, 43, 54, 65] //it returns
}))

//filter- it works exactly like map which is used to return only true cases
console.log(c.filter(function (num)
{
    console.log(num)       //[11,12,33,44,55]
    return num%2==0            //[12, 44]   //it returns only the true element it filters
}))

//reduce-  it adds num1 +num2=num3 means it adds current value to previous value finally it returns the sum of the total value
red = [10,20,30,40]
console.log(red.reduce(function (pre,num)
{
    return(pre+curr)              //100 ---pre+curr=total 10+20=30,  30+30=60,   60+40=100//
},0))

//Another way of creating array
array=new Array(5)
console.log(array)   //[empty × 5]
array.push(4)
console.log(array)
array.unshift(1,2,3,4,5)
console.log(array)

