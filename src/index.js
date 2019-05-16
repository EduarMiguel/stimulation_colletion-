const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Tablas");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30, Genero:"Masculino"},
    { name: "María", lastName: "Sharápova", age: 32, Genero:"Femenino"},
    {name: "Miguel", lastname: "Mercado", age: 26, Genero:"Masculino"}
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

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
