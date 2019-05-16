const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Tablas de Usuario");
});

app.get("/users", (req, res) => {
  let users = [
    { idUsuario: 01, name: "Luis", lastName: "Perez", age: 30, Genero:"Masculino", telefono: 7732112},
    { idUsuario: 02, name: "María", lastName: "Lopez", age: 32, Genero:"Femenino", telefono: 7442434},
    { idUsuario: 03, name: "Miguel", lastname: "Mercado", age: 26, Genero:"Masculino", telefono: 7731221}
     ];
  res.send(users);
});

app.get("/progreso", (req, res) => {
  let progreso = [
    { idProgreso: 001, status: "Alto", fechainicio: 12/05, fechafinal:18/05},
    { idProgreso: 002, status: "Bajo", fechainicio: 09/05, fechafinal:20/05},
    {idProgreso: 003, status: "Medio", fechainicio: 15/05, fechafinal:22/05}
     ];
  res.send(progreso);
});

app.get("/nivel", (req,res) => {
    let nivel = [
        {idNivel: 05, Nombre: "NivelOne", Status: "aceptable"},
        {idNivel: 06, Nombre: "NivelTwo", Status: "insuficiente"},
        {idNivel: 07, Nombre: "NivelOne", Status: "excelente"}
    ];
    res.send(nivel);
});

app.get("/actividades", (req,res) => {
    let actividades = [
        {idActividades: 011, Nombre: "Actividad1"},
        {idActividades: 012, Nombre: "Actividad2"},
        {idActividades: 013, Nombre: "Actividad2"}
    ];
    res.send(actividades);
});

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
