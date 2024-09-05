//--------------------------------FETCH----------------------------//

/* Asynchronous JS:
Javascript is a single threaded synchronous language
Asynchronous means which will take some time

we have so many default asynchronous functions
like fetch(),timers or async-await etc..,
Timers: timer is a web api which have default methods like setTimeout(),setInterval().
setTimeout --> it will run only once after specific time
setInterval()--> it will run for even span of specific time

How Asynchronous function run. JS is synchronous and single threaded language. all async functions are pushed into task queue. then event loop pushes the task queue elements into callstack when call stack is empty.

API: application programming interface

API: API's are used to bring the data or send the data or update the data;
In olden times API requests used to be done by using XmlHttpRequest.
Modern Methods are fetch(a default method in browser) and axios(3rd party application to send or receive data requests).
API are two types:
1. REST API-->state transmission-->  data gets updated with its state-->data is in the format of JSON
JSON(Javascript object notation)---> stringified version ob objects/data
2. graphQL

How Fetch Works?
fetch(url), it will return a promise
PROMISE: a promise is an object which describes an eventual completion of async operation.
we can resolve promises by .then and
we can resolve errors in promises by catch

but catch will work only if then satement is above it */

//-----------------------------JS CODE---------------------------//
function posts()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res){
        console.log(res)
        return res.json()
    }).then(function (dis){
        console.log(dis)
        displayData(dis)
    })
}
posts()

let poss=document.getElementById('posts')
function displayData(dis)
{
    dis.forEach (function(d)
    {
        let divv=document.createElement('div')
        let id=document.createElement('p')
        id.textContent=d.id;
        let title =document.createElement('h3')
        title.textContent= d.title;
        let body=document.createElement('p')
        body.textContent=d.body;
        divv.append(id,title,body)
        divv.classList.add('newdiv')
        poss.appendChild(divv)
    })
    
}


/* --------------------------HTML----------------------------//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FETCH</title>
    <link rel="stylesheet" href="./movielib.css">
</head>
<body>
    <h1>POSTS</h1>
    <div id="posts">

    </div>

    <script src="./movielib.js"></script>
</body>
</html> */