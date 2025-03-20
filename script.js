function highlight(e) {
    //Write your code here
	let strongElems = document.querySelectorAll("strong");
	strongElems.forEach((elem)=>{
		console.log(elem.style.color = "rgb(0, 128, 0)")
	});
}




function return_normal(e) {
    //Write your code here
	let strongElems = document.querySelectorAll("strong");
	strongElems.forEach((elem)=>{
		console.log(elem.style.color = "rgb(0, 0, 0)")
	});
}
