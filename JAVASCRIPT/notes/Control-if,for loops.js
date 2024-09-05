/* if---else---elseif--switch Case---loops---for---while---dowhile--//


//------------------------CONTROL STATEMENTS------------------------//
//if : checks whether the condition is true//
//else:  checks  the condition is it is true it prints the statement and ends . If it is false it cheks the else condition.
a=19
if(a<=18)
{
    console.log("younger")
}
else
{
    console.log("adult")
}

//Even or odd number//
let num=prompt("enter any number")
if(num%2==0)
{
    console.log("even num is:",num)
}
else
{
    console.log("odd num is:",num)
}

/* take a string check whether it starts with vowel or not*/12
var str= prompt("enter any name")
if( (str.startsWith('a')) || (str[0] == 'e') || (str[0]=='i') || (str[0]=='o') || (str[0]=='u') )
    console.log("It is a Vowel")
else
    console.log("It is a constant")

//-------------------------------------------------------------------//
//elseif
var str= prompt("enter any name")
if( (str.startsWith('a')) )
    console.log("It is a Vowel")
else if((str.startsWith('e')))
    console.log("It is a Vowel")
else if((str.startsWith('i')))
    console.log("It is a Vowel")
else if((str.startsWith('o')))
    console.log("It is a Vowel")
else if((str.startsWith('u')))
    console.log("It is a Vowel")
else
    console.log("It is a constant")

//elseif
    let day = 6;
    if (day == 1) console.log("Monday")
    else if (day == 2) console.log("tuesday")
    else if (day == 3) console.log("wednesday")
    else if (day == 4) console.log("thursday")
    else if (day == 5) console.log("friday")
    else if (day == 6) console.log("saturday")
    else if (day == 7) console.log("sunday")
    else console.log("wrong input")

//take 3 numbers a,b,c, iwant u to compare them and print largest and smallest number without using max/min
var a= 10
var b= 5
var c= 4
if( (a<b)&&(a<c) )
    console.log("a  is smallest")
else if((b<a)&&(b<c) )
    console.log("b  is smallest")
else 
    console.log("c  is smallest")
//c  is smallest    

var a= prompt("enter a")
var b= prompt("enter b")
var c= prompt("enter c")
if( (a>b)&&(a>c) )
    console.log("a  is largest")
else if((b>a)&&(b>c) )
    console.log("b  is largest")
else 
    console.log("c  is largest")          //b is largest


//SWITCH CASE
let d= 5
switch (d)
{
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day")
}

//task display a multiple choice question and ask user to enter answer based on the answer check correct or not using switch case
console.log("How many planates are there in Solar System? A: 7 B:8 C:10 D:9")
let answer=prompt("Enter your answer")
switch (answer)
{
    case 'A': console.log("Wrong Answer");break;
    case 'B': console.log("Right Answer");break;
    case 'C': console.log("Wrong Answer");break;
    case 'D': console.log("Wrong Answer");break;
    default: console.log("Wrong input")
}


//------------------------------------LOOPS-------------------------//
/*Loops:
loops are iterators which repeats a set/block of code again and again, each repeatation is called iteration
There are two type of loops
Entry control loops and entry control loops
Entry control loops:
popular js entry control loops are while and for
each loops needs three values initialization,condition,updation*/

//------------------------while----------------------------------//
//While Loop:   It runs the block of code until the text condition became false.
let arr=[2,3,4,6,7,8,9,1]
length=arr.length
var i=0
while(i<=length-1)
{
    console.log(arr[i]);
    i++;
}                      //2,3,4,6,7,8,9,1

//using while loops print even numbers from 0 to 20
let num=0;
while(num<=20)
{
    if(num%2==0)
    {
        console.log(num);
    }
    num++;           //even numbers from 0 to 20
}

let n=0;
while(n<=20)
{
    console.log(n);
    n+=2;
}                    //even numbers from 0 to 20

// using while check whether each word in the gievn string starts with vowel or not
//input: abhi is educated.--output-success
//input: prasad is good -- output- failed
let str="adhi is educated"
word=str.split(' ')
let i=0;
let count=0;
while(i<word.length)
{
    if ( (word[i][0]=='a') || (word[i][0]=='e') || (word[i][0]=='i') || (word[i][0]=='o') || (word[i][0]=='u') )
    {
        count++;
    }
    else
    {
        console.log("Fail")
    }
    i++;
}
if(count==word.length)
{
    console.log("success")  
}                          //success

let str="dhi is educated"
word=str.split(' ')
let i=0;
let count=0;
while(i<word.length)
{
    if ( ['a','e','i','o','u'].includes(word[i][0]))
    {
        count++;
    }
    else
    {
        console.log("Fail")
    }
    i++;
}
if(count==word.length)
{
    console.log("success")  
}
count++;              //fail


//---------------------for loop--------------------------------------//
let i=20
for(i=20;i>=1;i--)
{
    console.log(i)
}

//print the array
let arr=[2,3,4,7,8,3,2,4]
for( let i=0;i<=arr.length;i++)
{
    console.log(arr[i])
}             //2,3,4,7,8,3,2,4

//count of odd and even
let arr=[3,2,4,6,8,9,77,5,4]
count=0;
for(let i=0; i<=arr.length;i++)
{
    if(arr[i]%2==0)
    {
                count++
    }
    console.log("count of even",+count);
    console.log("odd number are",+arr.length-count)
    
}                     //even-5, odd-4

//SUm of even and odd numbers
let arr =[1,3,4,5,7,8,18]
let sumEven=0;
let sumOdd=0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        sumEven+=arr[i];
    } 
    else
    {
        sumOdd+=arr[i];
    }
}
console.log("sum of even number",sumEven);         //30
console.log("sum of odd number",sumOdd);           //16

//FOR..OF ---It consider values
let a=[1,2,3,4]
for (i of a)
{
    console.log(i)
}               //1,2,3,4
//FOR..In  --- it consider indexs
for(i in a)
{
    console.log(i)
}              //0,1,2,3
//For..Each
a.forEach(function(i)
            {
                 console.log(i)
            })

//-----------------------------DO-WHILE-----------------------------//
//do-while = It will check at the end of the loop initialize;
do
{
    //statements
}
while(condition);

let arr=[3,4,5,6,7]
let i=0;
do
{
  console.log(arr[i]);
  i++;
}
while(i<=arr.length)









