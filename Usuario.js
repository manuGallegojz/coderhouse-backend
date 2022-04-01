const { count } = require("console");
const fs = require("fs");

let productos = [                                                                                                                                                     
    {                                                                                                                                                    
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
        id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Calculadora',                                                                                                                              
        price: 234.56,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
        id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Globo Terráqueo',                                                                                                                          
        price: 345.67,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
        id: 3                                                                                                                                              
    }                                                                                                                                                    
]

fs.readFile("./productos.json", "utf-8", (err, data)=>{
    if(err){
        console.error("Error al escribir.")
    }
    if(data){
        fs.writeFile("./productos.json", JSON.stringify(productos), {encoding: "utf-8"}, (err)=>{
            if(err){
                console.error("Error al escribir.   ")
            }
        })
    }
})

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }

    save(objeto) //: Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    {
        fs.readFile(`./${this.archivo}`, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.");
            }else
            {

                let productos = JSON.parse(data);

                if(productos.length !== 4){

                    productos.push(objeto);

                    console.log(productos);

                    fs.writeFile(`./${this.archivo}`, JSON.stringify(productos), "utf-8", (error) =>{
                        if(error){
                            console.log("Se produjo un error")
                            }
                    }
                    )

            }
        }
        })


    }

    getById(Number) //: Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    {
        fs.readFile(`./${this.archivo}`, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let encontrarProducto = JSON.parse(data).find(x => {
                    return x.id == Number
                })
                console.log(encontrarProducto);
            }
        })
        }

    getAll() //: Object[] - Devuelve un array con los objetos presentes en el archivo.
    {
        fs.readFile(`./${this.archivo}`, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                console.log(JSON.parse(data))
            }
        })
        }

    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {
        fs.readFile(`./${this.archivo}`, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let ListaSinProducto = JSON.parse(data).filter(x => {
                    return x.id != Number
                })
                fs.writeFile(`./${this.archivo}`, JSON.stringify(ListaSinProducto), "utf-8", (error) =>{
                    if(error){
                        console.log("Se produjo un error")
                        }
                        console.log(ListaSinProducto)
                })
            }
        })
        }

    deleteAll() //: void - Elimina todos los objetos presentes en el archivo.
    {
        fs.readFile(`./${this.archivo}`, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let ListaLimpia = [];
                fs.write(`./${this.archivo}`, JSON.stringify(ListaLimpia), "utf-8", (error) =>{
                    if(error){
                        console.log("Se produjo un error")
                        }
                        console.log(ListaLimpia)
                })
                
            }
        })
        }
    
    }

            const archivo = new Contenedor("productos.json");

            archivo.save({                                                                                                                                  
                title: 'NotePad',                                                                                                                              
                price: 129.59,                                                                                                                                     
                thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
                id: 4
                })

            archivo.getById(2)

            archivo.getAll()

            //archivo.deleteById(2)

            //archivo.deleteAll()