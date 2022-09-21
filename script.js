//1---- Capturar el formulario-------//

const form = document.getElementById('form')

//2-- Capturar toda la informacion en algun lugar---//

//-------Crear espacio de memoria--------//

let CitaMentorias = []

//3------- Capturar el evento submit----//

form.addEventListener('submit', e => {
    e.preventDefault()
    agendar()
})

//4- Crear una funcion que permita capturar los datos del formulario

//capturar los datos - construir el objeto - enviarlo al localstorage

const agendar = () => {
    // capturar los datos del formulatio o los inputs y almacenarlos en un espacio de memoria

    let nomEst = document.getElementById('nomEstud').value
    let nomMentor = document.getElementById('nomMentor').value
    let email = document.getElementById('email').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value

    let agregarCita = {
        id: Math.round(Math.random() * (100 - 1) + 1),
        nomEst,
        nomMentor,
        email,
        fecha,
        hora
    }

    //Enviar esta info al LocaStorage

    // localStorage.setItem('Agenda', JSON.stringify(agregarCita))

    // Enviar al local storage
    // validar si existe una key (agenda) exista
    // Si la key no existe 

    //5.1 validar o buscar la key

    const key = JSON.parse(localStorage.getItem('Agenda'))
    console.log(key)

    if (key == null) {
        
        CitaMentorias.push(agregarCita)
        localStorage.setItem('Agenda', JSON.stringify(CitaMentorias))
             

    }
    else {
        key.unshift(agregarCita)     
        localStorage.setItem('Agenda', JSON.stringify(key))
        
    }
    listarLocalStorage()  
}

//6 Listar

// Capturar la informacio de donde quiero listar

const listar = document.getElementById('listarAgenda')

// Crear una funcion para traerme lo que tengo dentro de localstorage y pintalo en la tabla que esta dentro de listar

const listarLocalStorage = () =>{
    listar.innerHTML = ''

    //Traerme todo lo que esta en el localstorage

    const traerArrayObjetos = JSON.parse(localStorage.getItem('Agenda'))

    // recorrer lo que esta en el localstorage con .map
    traerArrayObjetos.map(array => {

        // Desestructuramos el array
        const { id, nomEst, nomMentor, email, fecha, hora} = array

        listar.innerHTML += 
        `
        <td>${id}</td>
        <td>${nomEst}</td>
        <td>${nomMentor}</td>
        <td>${email}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td><button type="button" class="btn btn-danger" id= "${id}">Eliminar</button></td>
        `
    })
}

//7 Cargar la lista el en DOM 

document.addEventListener('DOMContentLoaded', listarLocalStorage)

//8 Eliminar un elemento

listar.addEventListener('click',e => {
    const btnEliminar = e.target.classList.contains('btn-danger')
    console.log("btnEliminar")
    //traer el id
    const id = e.target.id
    console.log(id)
    const traerArrayObjetos = JSON.parse(localStorage.getItem("Agenda"))

    // Buscar el elemento que cumpal al condicion

    const buscarId = traerArrayObjetos.find(datos => datos.id === Number(id))
    console.log(typeof(buscarId.id))

    if (btnEliminar){
        traerArrayObjetos.forEach((lis, index)=>{
            
            if(lis.id == buscarId.id){
                traerArrayObjetos.splice(index, 1)
                localStorage.setItem('Agenda', JSON.stringify(traerArrayObjetos))
                
                listarLocalStorage()
            }
        })
    }



    
})