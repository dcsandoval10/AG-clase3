const practica = [
    {
        id: 1, 
        nombre: 'Yudith Leon',
        leng: ['Css', 'Java', 'C++', 'JavaScript',' Redux']
    },
    {
        id: 2, 
        nombre: 'Juan Paredes',
        leng: ['C', 'Javascript',' Angular']
    },
    {
        id: 3, 
        nombre: 'Alejandra Rojas',
        leng: ['PHP', 'Javascript', 'C++', 'Next']
    }
]


//---------------For Each---------------//

practica.forEach(p => console.table(p.leng))

//-----------------------Map-----------------------------//

practica.map(p=> console.log(p.nombre)) 

// Siempre devuelve una copia del array, regresa un array

//---------------------------Find--------------------------//

const results = practica.find(p=> p.nombre == 'Yudith Leon')
console.log(results)

const results1 = practica.find(p=> p.nombre == 'Yudith Leon' || p.nombre == 'Alejandra Rojas')
console.log(results1)

//------------------------Filter---------------------------//

const resultFilter = practica.filter(p => p.leng.includes('C++'))
console.log(resultFilter)

//---------------Some devuelve si la condicion se cumple por lo menos 1 vez( True o False)----------//

const resultSome = practica.some (p => p.id == 4)
console.log(resultSome)

const resultSome1 = practica.some (p => p.leng.includes('Redux'))
console.log(resultSome1)

//--------------Every: es parecido al some, pero debe cumplirse en todas------------------------------//

const resultEvery = practica.every (p => p.leng.includes('Redux'))
console.log(resultEvery)

//-------------Reduce: Devuelce un array --------------------------------------//

const resultsReduce = practica.reduce((allLeng, p) => {
    return [...allLeng, ...p.leng]

},[])
console.log(resultsReduce)