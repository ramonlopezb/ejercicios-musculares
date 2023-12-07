console.log("hello wolrd");
let EjerciciosMusculares = document.getElementById("ejerciciosMusculares");
EjerciciosMusculares.innerHTML = "Muscle Exercises"

const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.getElementById('muscle-selector');
const descripcionEjercicio = document.getElementById("exercise-description");


selectOption.addEventListener('click', function(){
    selectBox.classList.toggle('active');

});
optionsList.addEventListener('change', function () 
{
    mostrarEjerciciosParaFortalecerElMusculo(this.value);
});

let musculos = ['abdominals','abductors','biceps','calves','chest','forearms','glutes','hamstrings','lats','lower_back'];

async function fetchdata(muscle){
    let url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy`;
    const res = await fetch(url); 
    const data = await res.json();
	return data;	
}

async function mostrarEjerciciosParaFortalecerElMusculo(musculo)
{     
    let ejercicios = await fetchdata(musculo);
    for(i = 0; i < 3; i++)
    {
        let h1 = document.getElementById(`muscle${i}`);
        h1.innerHTML = "Musculo: "+  ejercicios[i]["muscle"];
        let h2 = document.getElementById(`name${i}`);
        h2.innerHTML = "Nombre: "+  ejercicios[i]["name"];
        let claseDeEjercicio = document.getElementById(`type${i}`);
        claseDeEjercicio.innerHTML = ejercicios[i]["type"];
        let equipoParaElEjercicio = document.getElementById(`equipment${i}`);
        equipoParaElEjercicio.innerHTML = ejercicios[i]["equipment"];
        let complejidadDelEjercicio = document.getElementById(`difficulty${i}`);
        complejidadDelEjercicio.innerHTML = ejercicios[i]["difficulty"];
        let instruccionesDelEjercicio = document.getElementById(`instructions${i}`);
        instruccionesDelEjercicio.innerHTML = ejercicios[i]["instructions"];
    }      
}
/*async function tiposDeMusculo(){
    for(i= 0; i < 3 ; i++){
        let json = await fetchdata(musculos[i]);
        console.log(json);
        let h1 = document.getElementById(`muscle${i}`)
        h1.innerHTML = json[0]["muscle"]
        let h2 = document.getElementById(`name${i}`);
        h2.innerHTML= json[0]["name"];
        let claseDeEjercicio = document.getElementById(`type${i}`);
        claseDeEjercicio.innerHTML=json[0] ["type"];
        let equipoParaElEjercicio = document.getElementById(`equipment${i}`);
        equipoParaElEjercicio.innerHTML = json[0] ["equipment"];
        let complejidadDelEjercicio = document.getElementById(`difficulty${i}`);
        complejidadDelEjercicio.innerHTML = json[0] ["difficulty"];
        let ilustracionDelEjercicio = document.getElementById(`instructions${i}`);
        ilustracionDelEjercicio.innerHTML = json[0]["instructions"];
        
    }
}
tiposDeMusculo();*/

// optionsList.forEach(
//     function(optionsListSingle)
//     {
//     optionsListSingle.addEventListener('change',function()
//     {
//         console.log("1");
//         text = this.textContent;
//         soValue.value = text;
//         selectBox.classList.remove('active');
//         ejerciciosParaFortalecerElMusculo();



//     })
// });
// optionSearch.addEventListener('keyup',function(){
//     var filter, li, i, textValue;
//     filter = optionSearch.value.toUpperCase();
//     li = options.getElementsByTagName('li');
//     for (i = 0; i < li.length; i++) {
//         liCount = li[i];
//         textValue = liCount.textContent || liCount.innerText;
//         if (textValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = '';
//         } else {
//             li[i].style.display = 'none';
//         }

//     }
// });


