import React from "react";
import { ItemMain } from "./ItemMain";
import "./App.css";
import { HeaderRuadis } from "./HeaderRuadis.jsx";
const datosLibros = {
  libros: [
    {
      titulo: "Derecho",
      ano: 2015,
      carillas: 312,
    },
    {
      titulo: "Matematica",
      ano: 2014,
      carillas: 200,
    },
    {
      titulo: "Lengua",
      ano: 2017,
      carillas: 158,
    },
    {
      titulo: "Cosas",
      ano: 2018,
      carillas: 158,
    },
    {
      titulo: "Camasutra",
      ano: 2154,
      carillas: 9844,
    },
    {
      titulo: "TuViejaEnTanga",
      ano: 2145,
      carillas: 454,
    },
    {
      titulo: "Psicologia",
      ano: 2564,
      carillas: 90,
    },
    {
      titulo: "Ed. Fisica",
      ano: 1988,
      carillas: 564,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "CaraDeBola",
      ano: 2025,
      carillas: 980,
    },
  ],
};
console.log(datosLibros.libros[1].carillas);
function App() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <main className="flex flex-wrap justify-center">
        {datosLibros.libros.map((libro) => (
          <ItemMain
            key={libro.titulo}
            titulo={libro.titulo}
            ano={libro.ano}
            carillas={libro.carillas}
          />
        ))}
      </main>
    </React.Fragment>
  );
}

export default App;
