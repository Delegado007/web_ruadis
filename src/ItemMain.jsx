import React from "react";
import logo from "./image/logoPdf.jpg";

function ItemMain({ titulo, ano, carillas }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-4 w-80">
      <figure className="w-40">
        <img src={logo} alt="Movie"></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>Año: {ano}</p>
        <p>Carillas: {carillas}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export { ItemMain };
