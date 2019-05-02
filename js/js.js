//Objeto JSON estudiantes

var estudiantes= [{
		"codigo":"001",
		"nombre":"Julian Jiménez",
		"nota": 84
	},{
		"codigo":"002",
		"nombre":"Andrea Montero",
		"nota": 89
	},{
		"codigo":"003",
		"nombre":"Alejandro Martinez",
		"nota": 74
	},{
		"codigo":"004",
		"nombre":"Marianela Artavia",
		"nota": 98
	},{
		"codigo":"005",
		"nombre":"Danilo Mena",
		"nota": 88
	},{
		"codigo":"006",
		"nombre":"Valeria Hernandez",
		"nota": 79
	},{
		"codigo":"007",
		"nombre":"Andres Moya",
		"nota": 87
	},{
		"codigo":"008",
		"nombre":"Silvia Robles",
		"nota": 91
	},{
		"codigo":"009",
		"nombre":"Karla Rodriguez",
		"nota": 78
	},{
		"codigo":"010",
		"nombre":"Maria Gutierrez",
		"nota": 82
	}
	];

//Funciones asignadas al JSON

function data(json){
	var out="";
	for(i=0; i<json.length; i++){
		 out+= "Codigo: " + json[i].codigo +"<br>" + "Nombre: " + json[i].nombre + "<br>" + "Nota: " + json[i].nota + "<br>"+"<br>";
	}
	document.getElementById("informacion").innerHTML= out;
}








//Funciones para ejecutar onclick
 
function mostrar_informacion(){
	data(estudiantes);
}
