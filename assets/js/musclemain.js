console.log("hello wolrd");
const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('.options');
const optionsList = document.querySelectorAll('options li');


let musculos = ['abdominals','abductors','biceps','calves','chest','forearms','glutes','hamstrings','lats','lower_back'];

async function fetchdata(muscle){
    let url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy`;

    const res = await fetch(url); 
    const data = await res.json();
	console.log(data);
	return data;	
}
fetchdata();