import React from "react";
import { ItemMain } from "../RuadisMainItems";
import "../App/index.css";
import { HeaderRuadis } from "../RuadisHeader";
import iconWhatsapp from "../../image/whatsapp.svg";

const datosLibros = {
  libros: [
    {
      titulo: "Derecho 2",
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
      titulo: "Historia 2",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Lengua 4",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Ciencias",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Ed. artistica y contemporanea de la hera del hielo",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "locuras del patito Juna",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Madagascar y los 7 pitufos",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Me cago en los nombres Ramdom",
      ano: 2025,
      carillas: 980,
    },
    {
      titulo: "Prueba de imagiancion escrita",
      ano: 2025,
      carillas: 980,
    },
  ],
};

function App() {
  return (
    <React.Fragment>
      <HeaderRuadis />

      <main className="sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10 py-5 ">
        <div className="flex flex-wrap justify-center">
          {datosLibros.libros.map((libro) => (
            <ItemMain
              key={libro.titulo}
              titulo={libro.titulo}
              ano={libro.ano}
              carillas={libro.carillas}
            />
          ))}
        </div>
      </main>
      <div id="iconoWhatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=2604566841"
          rel="noreferrer"
          target="_blank"
        >
          <img src={iconWhatsapp} alt="whatsapp"></img>
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
