let colors=['aqua', 'bisque', 'aquamarine', 'cadetblue', 'darkgray', 'darksalmon', 'darkseagreen']
function b()
{
    const change = document.getElementById('b');
    console.log(change)
    change.style.backgroundColor =
		"#" + Math.round(Math.random() * 10000000).toString(16)
		document.body.style.backgroundColor="rgb(216, 200, 208)"
}
function a() 
{
	const change = document.getElementById("a")
	console.log(change)
	change.style.backgroundColor =
		"#" + Math.round(Math.random() * 10000000).toString(16)
		document.body.style.backgroundColor="rgb(132, 135, 165)"
}

