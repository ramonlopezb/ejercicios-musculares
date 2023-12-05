console.log("hello wolrd");
let EjerciciosMusculares = document.getElementById("ejerciciosMusculares");
EjerciciosMusculares.innerHTML = "Muscle Exercises"

let musculos = ['abdominals','abductors','biceps','calves','chest','forearms','glutes','hamstrings','lats','lower_back'];

async function fetchdata(muscle){
    let url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy`;

    const res = await fetch(url); 
    const data = await res.json();
	console.log(data);
	return data;	
}
fetchdata();

async function tiposDeMusculo(){
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
tiposDeMusculo();

