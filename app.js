//Variables

const formularioPendiente = document.querySelector("#formulario-pendiente");
const listaPendientes = document.querySelector(".body-pendiente");
let arregloTareas = [];

//Event Listeners
eventsListeners();
function eventsListeners() {
  formularioPendiente.addEventListener("submit", leerTarea);
  document.addEventListener("DOMContentLoaded", () => {
    arregloTareas = JSON.parse(localStorage.getItem("Pendientes")) || [];
    imprimirHTML();
  });
}

//Funciones
function leerTarea(e) {
  e.preventDefault();

  //Obtener la Tarea del Text Area
  const tarea = document.querySelector("#tarea-pendiente").value;
  
  if (tarea === "") {
    console.log("No puede ir Vacio");
    return;
  }

  const objTarea = {
    tarea,
    id: Date.now(),
  };
  //Agregar las tareas a un arreglo que controle todo
  arregloTareas = [...arregloTareas, objTarea];

  //Imprimir la Tarea en la card
  imprimirHTML();
  formularioPendiente.reset();

  //Pruebas consola
  console.log(arregloTareas);
}

function imprimirHTML() {
  eliminarHTML();
  arregloTareas.forEach((tarea) => {
    const btEliminar = document.createElement("a");
    btEliminar.classList.add("badge", "bg-danger");
    btEliminar.innerText = "X";

    btEliminar.onclick = () => {
      borrarTarea(tarea.id);
    };

    const pendiente = document.createElement("li");
    pendiente.classList.add(
      "list-group-item", "list-group-item-action",  "list-group-item-danger",
      "mb-1",
      "pendiente",
      'action'
    );
    pendiente.innerText = tarea.tarea;
    listaPendientes.appendChild(pendiente);
    pendiente.appendChild(btEliminar);
  });

  sincronizarStorage();
}

function eliminarHTML() {
  while (listaPendientes.firstChild) {
    listaPendientes.removeChild(listaPendientes.firstChild);
  }
}

function sincronizarStorage() {
  localStorage.setItem("Pendientes", JSON.stringify(arregloTareas));
}

function borrarTarea(id) {
  arregloTareas = arregloTareas.filter((tarea) => tarea.id !== id);
  imprimirHTML();
  console.log("Borrando");
}


/*** *** EN PROCESO *** ***/

//Variables
const formularioProceso = document.querySelector('#formulario-proceso');
const listaProceso = document.querySelector('.body-proceso');

let arregloProceso = [];


//EventListeners
eventsListenersProceso();
function eventsListenersProceso(){
  formularioProceso.addEventListener("submit", agregarProceso);

  document.addEventListener('DOMContentLoaded', ()=>{
    arregloProceso = JSON.parse(localStorage.getItem('Proceso')) ||[];
    imprimirHTMLProceso();
  })

}



//Funciones
function agregarProceso(e){
  e.preventDefault();
  const proceso = document.querySelector('#tarea-proceso').value;

  const objProceso = {
    proceso,
    id: Date.now(),
  }

  arregloProceso = [...arregloProceso, objProceso];


  //Imprimir en HTML
  imprimirHTMLProceso();
  formularioProceso.reset();
  console.log(arregloProceso);
}


function imprimirHTMLProceso(){
    eliminarHTMLProceso();
    arregloProceso.forEach(proceso =>{
      //Boton de Eliminar
      const btnEliminar = document.createElement('a');
      btnEliminar.classList.add("badge", "bg-warning");
      btnEliminar.innerText = ('X');
      
      btnEliminar.onclick = () =>{
        eliminarProceso(proceso.id);
      };
      
      const procesoHTML = document.createElement('li');
      procesoHTML.classList.add('list-group-item',  'list-group-item-action', 'list-group-item-warning','proceso','mb-1')
      procesoHTML.innerText = proceso.proceso;
      listaProceso.appendChild(procesoHTML);
      procesoHTML.appendChild(btnEliminar);
    })

    sincronizarStorageProceso();
}

function eliminarProceso(id){
  arregloProceso = arregloProceso.filter((proceso) => proceso.id != id);
  imprimirHTMLProceso();
}

function eliminarHTMLProceso(){
  while(listaProceso.firstChild){
    listaProceso.removeChild(listaProceso.firstChild);
  }
}

function sincronizarStorageProceso(){
  localStorage.setItem('Proceso', JSON.stringify(arregloProceso));
}



/** SECCION HECHOOO **/

//Variables
const listaHecho = document.querySelector('.body-hecho');
const formularioHecho = document.querySelector('#formulario-hecho');
let arregloHecho = [];



//EvenListeners
eventsListenersHecho()
function eventsListenersHecho(){
    formularioHecho.addEventListener('submit', agregarHecho);
    document.addEventListener('DOMContentLoaded', ()=>{
      arregloHecho = JSON.parse(localStorage.getItem('Hecho')) || [];
      imprimirHTMLHecho();
    })
};



//Funciones
function agregarHecho(e){
    e.preventDefault();
    const hecho = document.querySelector('#tarea-hecho').value;
    
    objHecho = {
      hecho,
      id: Date.now(),
    }

    arregloHecho = [...arregloHecho, objHecho];
    imprimirHTMLHecho();
    formularioHecho.reset();

    console.log(arregloHecho);

}

function imprimirHTMLHecho(){

  eliminarHTMLHecho();
  arregloHecho.forEach(hecho =>{
    
    //Boton Eliminar
    const btnEliminar = document.createElement('a');
    btnEliminar.innerText = 'X';
    btnEliminar.classList.add('badge', 'bg-success');

    btnEliminar.onclick = () => {
      borrarHecho(hecho.id);
    };

    const hechoHTML = document.createElement('li');
    hechoHTML.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-success', 'hecho');
    hechoHTML.innerText = hecho.hecho;
    hechoHTML.appendChild(btnEliminar);
    listaHecho.appendChild(hechoHTML);
  })

  sincronizarStorageHecho();
}


function sincronizarStorageHecho(){
  localStorage.setItem('Hecho', JSON.stringify(arregloHecho));
}

function borrarHecho(id){
  arregloHecho = arregloHecho.filter((hecho) => hecho.id != id);
  imprimirHTMLHecho();
  console.log('Borando');
}

//Eliminar HTML PREVIO
function eliminarHTMLHecho(){
  while(listaHecho.firstChild){
    listaHecho.removeChild(listaHecho.firstChild);
  }
}

