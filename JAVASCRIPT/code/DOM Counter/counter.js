let i=document.getElementsByClassName('v');
let count=0;
function limits()
{
    i[0].textContent=count;
}
function stop()
{
    if(count>20)
    {
        alert('count exceed u can increment upto 20 only');
        count=20;
    }
    else if(count<0)
    {
        alert("count successed u can decrement the value below 0");
        count=0;
    }
    limits(); 
}
function incre()
{
    count++;
    stop();
    result()
}
function decre()
{  
    count--;
    stop();
    result()
}
function reset()
{
    count=0;
    limits();
}
let r=document.getElementsByClassName('final')
let res='';
function nam()
{
    r[0].textContent=res
}
function result()
{
    if(count%2===0)
    {
        res='even';
    }
    else
    {
        res='odd';
    }
    nam()
}
