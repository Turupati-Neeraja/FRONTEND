/*-----------------------------BOOK LIBRARY--------------------------//
 
//------------HTML CODE for CLOSE() PRINT()------//

<div class="buttons">
        <button onclick="closewindow()">Close</button>
        <button onclick="printwindow()">print</button>
     </div>
---------------------JS CODE---------------------
function closewindow()
{
    window.close()
}
function printwindow()
{
    window.print()
}


//-----------------------------JS CODE-----------------------------*/
const movarr=[
    {
        title: "18 Pages",
        imageLink:"https://th-i.thgim.com/public/incoming/d66n2j/article66297527.ece/alternates/LANDSCAPE_1200/18-pages%20new.jpg",
    },
    {
        title: "Narayana and Co",
        imageLink: "https://m.media-amazon.com/images/M/MV5BNjc1ZGFkMzEtMDkxYS00YmM0LWFmODUtMDRlMWVjZWZmNjkxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" ,
    },
    {
        title:"Money Heist",
        imageLink:"https://i.ytimg.com/vi/_InqQJRqGW4/hqdefault.jpg",
    },
    {
        title: "Interstellar",
        imageLink:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    },
    {
        title: "Stranger Things",
        imageLink:"https://img.etimg.com/thumb/width-420,height-315,imgsize-48958,resizemode-75,msid-104801810/news/international/us/stranger-things-season-5-meet-the-returning-cast-and-their-characters.jpg",
    }
];
const movie=document.getElementById('movies')
movarr.forEach(function (ma)
{
    const movdiv=document.createElement('div');
    const pic=document.createElement('img');
    pic.src=ma.imageLink;
    pic.alt=ma.title;
    const title= document.createElement('h3')
    title.textContent=ma.title;
    movdiv.append(pic,title)
    movdiv.classList.add('movv')
    movie.append(movdiv)
})

/* --------------------------HTML CODE-----------------------------//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Library</title>
    <link rel="stylesheet" href="./booklib.css">
</head>
<body>
    <h1>MOVIES</h1>
    <div id="movies">

    </div>

    <script src="./booklib.js"></script>
</body>
</html>

//-----------------------------CSS--------------------------------//
*
{
    box-sizing: border-box;
    background-color: beige;
    margin: 10px;
}
#movies
{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
h3
{
    text-align: center;
}
.movv img
{
    border-radius: 0.8em;
    box-shadow: 3px 3px 3px 2px rgb(69, 64, 64);
}
@media(max-width:1000px)
{
    .movv img
    {
        height: 20vh;
        width: 30vw;
    }
}
@media(min-width:1001px)
{
    #movies
    {
        gap: 7px;
    } 
    .movv img
    {
        height: 30vh;
        width: 25vw;
    }  
} */