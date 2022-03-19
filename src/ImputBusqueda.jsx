import React from "react";

function ImputBusqueda() {
  return (
    <div className="navbar bg-zinc-800">
      <input
        type="text"
        placeholder="Busca aquí"
        class="input input-bordered input-accent w-full max-w-xs"
      ></input>
    </div>
  );
}
export { ImputBusqueda };
