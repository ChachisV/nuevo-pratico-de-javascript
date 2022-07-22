const nombre = "Jaime Andres";
const lastname = "Vanegas Motta";
const completeName = nombre +" "+ lastname;
const nickname = "ChachisV";

console.log( "Mi nombre es " + completeName + " pero prefiero que me digas "+ nickname + ".")


function presentation(nombre, lastname, nickname){
    let completeName = nombre + " " + lastname;

    console.log( "Mi nombre es " + completeName + " pero prefiero que me digas "+ nickname + ".");
}

presentation("rodrigo", "Vanegas", "Rocky")

// CONDICIONALES

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// let suscripcionPlatzi = "Basic"


// if (suscripcionPlatzi === "Free") {
//     console.log("Solo puedes tomar los cursos gratis");
// } else if (suscripcionPlatzi === "Basic") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (suscripcionPlatzi === "Expert") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (suscripcionPlatzi === "ExpertPlus"){
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

// let suscripcionPlatzi = "Basic"


// function suscripcionPlatzi(suscripcion){
//     if (suscripcion === "Free") {
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     }  
    
//     if (suscripcion === "Basic") {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         return;
//     }  
    
//     if (suscripcion === "Expert") {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     }  
    
//     if (suscripcion === "ExpertDuo"){
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         return;
//     }
//     console.warn("Ese tipo de suscripcion NO existe");
// }

const tiposDeSuscripcionesPlatzi ={
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTipoSuscripcion(suscripcion){
    if (tiposDeSuscripcionesPlatzi[suscripcion]){
        console.log(tiposDeSuscripcionesPlatzi[suscripcion]);
        return;        
    }
    console.warn("Ese tipo de suscripcion NO existe");
}









// CICLOS

// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

// let i = 0;
// while(i < 5)
// {
//     console.log("El valor de i es: " + i); i += 1;
// }
// let i = 10;
// while(i >= 2)
// {
//     console.log("El valor de i es: " + i); i -= 1;
// }
// let respuesta = parseInt(prompt('Cuando es 2 + 2 '));
// if(respuesta === 2 + 2){
//     alert('Bien hecho');
// }
// else{
// 	while (respuesta != 2 + 2)
//   {
//       alert('Intenta otra vez');
// 	    respuesta = parseInt(prompt('Cuando es 2 + 2 '));
//   }
//   alert('Bien hecho');
// }


//ARRAYS Y OBJETOS

function cualquiera(array){
    console.log(array[0])
}

cualquiera(["jaime", "juan", "karla", "anita"])

function todos(array2){
    for (let i = 0; i < array2.length; i++){
        console.log(array2[i])
    }
}

todos(["jaime", "juan", "karla", "anita"])

function todosObjeto(obj){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}