//-----------------------DOM- DOCUMENT OBJECT MODEL--------------------//
//DOM uses to manipulate the whole code like inserting, updating, deleting and creating.//

//---------------------HTML EXAMPLE CODE TO MAKE CHANGES--------------//
/*<body>
    <script src="mew.js"></script>
    <h1 id="p1">HELLO BUDDY</h1>
    <div id="p3">
        <p class="hi">dcdc cccccccccccc</p>
        <p class="hi">vvvvvvvvvvvvvvvv</p>
        <p class="hi">bbbbbbbbbb</p>
        <p class="hi">fffffffffff</p>
    </div>
    <div id="p2">
        <h3 class="k">hiiiiiiiiiiiiii</h1>
        <h3 class="k">ddddddddddddddi</h1>
        <h3 class="k">hiiiifffffffffffffi</h1>
        <h3 class="k">hwwwwwwwwwwwwww</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus assumenda ad hic inventore accusantium sequi debitis non minima. Fugit assumenda tempore dolores temporibus nam deleniti iure, officiis exercitationem non cupiditate nisi obcaecati culpa voluptatibus vel porro. Necessitatibus at ad provident, consectetur numquam consequatur similique rerum officia recusandae corporis blanditiis!</p>
    
    </div>
    <script>
          //-----------coding---------//
    </script>
</body> */

//to change the whole data in body//
document.body.innerHTML =" NEW ONE"  //it replaces the old data
//to change the data in id//
var c=document.getElementById('p1')
c.innerHTML="My name is NEERAJA TURUPATi" 
//to change the whole date in class//
var cl=document.getElementsByClassName('hi')
cl[2].innerHTML="UUUUUUUUUUUUUUUUUUUUUU" 
//to change the whole data in Tagname//
var t=document.getElementsByTagName('h3')
for(let i=0;i<t.length;i++)
{
    t[i].innerHTML="MUNJBUJBHJKKKKKKKKK"
}
/*by childnodes,firstChild,lastChild,lastChildNodes,nextSibling,previousSibling,parentNode
element.childnodes - returns an array of an element child nodes.
element.firstChild - returns the first child node of an element.
element.lastChild - returns the last child node of an element.
element.lastChildNodes - returns true if an element has any chid nodes, otherwise false..
element.nextSibling - returns the next node at the same tree level.
element.previousSibling - returns the previous node at the same tree level.
element.parentNode - returns the parent node of an element.*/

//example//
var a=document.getElementById('p2');
var m = a.childNodes;
for(let i=0;i<m.length;i++)
{
    m[i].innerHTML="CHANGES ARE THERE"
}

//uses to access the elements
console.log(document.getElementsByTagName('h1')[0].textContent)
console.log(document.getElementsByClassName('para')[0].textContent)
console.log(document.getElementById('p1').textContent)
//it print the whole code
console.log(document)

/* If we want to access elements like css, use <QuerySelectors><QuerySelectorsAll> */
//It only Select first element 
console.log(document.querySelector('p').textContent)
//It selects all elements we can use by index
console.log(document.querySelectorAll('div p')[1].textContent)


//------------------------DOM EVENTS--------------------//
/* onchange - HTML element has been changed.
onclick - The user clicks an HTML element.
onmouseover - user moves the mouse over an HTMl element.
onmouseout - user moves the mouse away an HTMl element.
onkeydown - user pushes a keyboard key.
onload - The browser has finished loading the page. */