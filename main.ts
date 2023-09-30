/*Práctica 1: Arquitectura y programación de sistemas en internet
Realizada por Mario Parra - Grupo A */

//Space speed
//Apartado 1
type Pasajero = {
  origen?: string,
  nombre?: string
  altura: number,
  edad: number,
  peso: number,
  genero: string
}


//Apartado 2
//Interface es lo mismo que un type, cambia ligeramente en la sintaxis. 
interface Capsula {
  peso: number,
  dimensiones: string,
  capacidad_vel_cur: number,
  pasajeros: pasajeroInfeccion[],
}


//Apartado 3, con pasajeros inventados.
let enterprise: Capsula = {

      peso: 50000,
      dimensiones: "125x50x70",
      capacidad_vel_cur: 50,

      pasajeros: [
        {
          origen: "Tierra",
          nombre: "McKenzie Dallas",
          altura: 180,
          edad: 33,
          peso: 77,
          genero: "Masculino",
          infeccion: false          
        },
        {
          nombre: "Marie Sorloth",
          altura: 155,
          edad: 28,
          peso: 61,
          genero: "Femenino",
          infeccion: false
          
        },
        {
          origen: "Tierra",
          nombre: "Steven Sleth",
          altura: 175,
          edad: 29,
          peso: 72,
          genero: "Masculino",
          infeccion: true
          
        },
        {
          origen: "Tierra",
          altura: 183,
          edad: 38,
          peso: 83,
          genero: "Masculino",
          infeccion: true
          
        }
      ],
    };
  
  //extiendo solo añadiendo el nuevo campo
  interface pasajeroInfeccion extends Pasajero{
  infeccion: boolean;
  }

//Apartado 4: Kirk necesita saber cuántos tripulantes tienen un nombre y qué datos se conocen de ellos
//Apartado 4, Puede hacerse con un filter en vez de con object keys y values
//console.log(Object.keys(enterprise), Object.values(enterprise));
const pasajerosConNombre = enterprise.pasajeros.filter((elem) => elem.nombre);

const datosConocidosDePasajeros = enterprise.pasajeros.map((elem) => ({
  datosConocidos: Object.keys(elem),
  valoresDeDatos: Object.values(elem)
}
));

  console.log("El número de tripulantes que tienen nombre es de: ", pasajerosConNombre.length);
  console.log("Los datos de los pasajeros que se conocen son: ", datosConocidosDePasajeros);



//The side of paradise (1)
  console.log("Los pasajeros sanos son:");
  const sanos = enterprise.pasajeros.filter((elem)=> elem.infeccion === false);
  const nombresSanos = sanos.forEach((elem) => {
    elem.nombre && console.log(elem.nombre);
  });
  

//The side of paradise (2)
//Comprobar si hay alguien infectado (Si true es wue hay alguien infectado || False, no queda nadie)
const alguienInfectado = enterprise.pasajeros.some((elem) => elem.infeccion === true);
console.log("Si hay alguien infectado saldrá true, si no false: ", alguienInfectado);

//Comprobar si toda la tripulacion esta sana y curada (Devuelve False aunque haya solo 1)
const todosSanos = enterprise.pasajeros.every((elem) => elem.infeccion === false);
console.log("Si están todos sanos true, si no false:", todosSanos);

//Encontrar el próximo tripulante infectado
const proximoInfectado = enterprise.pasajeros.find((elem) => elem.infeccion === true);
console.log("El próximo tripulante onfectado es:", proximoInfectado?.nombre);

//The City on the Edge of Forever (1)
const fechas: (number | string)[] = [1903, "McCoy", 2003, "space time", 1985, 203, "spaceship", "hsjdhpl"];
const fechasValidas = fechas.filter((elem)=>{ 
    return typeof elem === "number";
})
console.log("Los años válidos son: ",fechasValidas);

//The City on the Edge of Forever (2)
const fechasCompletas = fechasValidas.map((elem) => new Date(1903, 1, 1, 0, 0, 0), new Date(2003, 2, 25, 18, 20, 12));
console.log("Fechas completas: ", fechasCompletas);


  
//The Trouble with Tribbles
type TurboConducto = {
  numero: number;
  daño: number;
  tribbles: number;
};


const listaTurboConductos: TurboConducto[] = [
  { numero: 1, daño: 30, tribbles: 25 },
  { numero: 2, daño: 21, tribbles: 15 },
  { numero: 3, daño: 10, tribbles: 30 },
  { numero: 4, daño: 50, tribbles: 21 },
  
];

listaTurboConductos.forEach((elem) => {
  console.log("El turboconducto",elem.numero, "con daño: ", elem.daño, "tiene ",elem.tribbles, "tribbles.");
});

//obtener el número total de tribbles en todos los turbo conductores con  más de 20 daños
const totalTribbles = listaTurboConductos.reduce((acc,elem) => {
  if(elem.daño>20){
    return acc+elem.tribbles;
  }
  return acc;
},0)

console.log("El total de tirblles en los turbo conductores con mas de 20 años es: ", totalTribbles);

//una señal lisa de un nivel que pase en serie el número del turbo conductor, sus daños y el número de tribbles, uno tras otro, sin diferenciarlos
const lista = listaTurboConductos.map(
  (elem) => [elem.numero, elem.daño, elem.tribbles]
);

const señalLisa = lista.flat();
console.log("La señal lisa es: ", señalLisa);


//mandando solo datos de  peligro o no, si el número de tribbles supera en un 50% al de los daños.
const datosPeligro = listaTurboConductos.flatMap((turboConducto) => {
  if (turboConducto.tribbles > 1.5 * turboConducto.daño) {
    return [turboConducto.numero, turboConducto.daño, turboConducto.tribbles];
  }
  return [];
});
console.log("Los datos de peligro son", datosPeligro);


