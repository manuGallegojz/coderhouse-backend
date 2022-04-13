const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8080
const app = express()

//localhost 8080

app.listen(PORT)

//productos

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

// fs.readFile("./productos.json", "utf-8", (err, data)=>{
//     if(err){
//         console.error("Error al escribir.")
//     }
//     if(data){
//         fs.writeFile("./productos.json", JSON.stringify(productos), {encoding: "utf-8"}, (err)=>{
//             if(err){
//                 console.error("Error al escribir.   ")
//             }
//         })
//     }
// })

//desafio 3

app.get("/", (req, res)=>{

    res.sendFile(path.join(__dirname + "/index.html"));

    })

app.get("/productos", (req, res)=>{

    fs.readFile(`./productos.json`, "utf-8", (err, data)=>{
        if(err){
            console.error("Error al leer.")
        }else
        {
                const datos = JSON.parse(data);
                res.send(datos);
        }
    })
    })

app.get("/productoRandom", (req, res)=>{

    fs.readFile(`./productos.json`, "utf-8", (err, data)=>{
        if(err){
            console.error("Error al leer.")
        }else
        {
            const datos = JSON.parse(data);
            const datoRandom = datos[Math.floor(Math.random() * datos.length)];
            res.send(datoRandom);
        }
    })
    })
