import React from "react";
import "./HeaderRuadis.css";
import { useState } from "react";
// import { Menu } from "@headlessui/react";
import cross_v1 from "./image/whatsapp.svg";
import cross_v2 from "./image/whatsapp.svg";
import hambuerger from "./image/whatsapp.svg";
import { current } from "daisyui/src/colors";

function HeaderRuadis() {
  const [desplegarMenu, setDesplegarMenu] = useState(false);
  const actualizar = (e) => {
    setDesplegarMenu(e.target.checked);
  };
  // console.log(desplegarMenu);
  return (
    <div className="navbar bg-base-100 mb-0 shadow-xl" id="navegacion">
      <div className="navbar-start items">
        <div className="hamburguesa">
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" onChange={actualizar} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {desplegarMenu === true && (
            <div className="menuDesplegable bg-base-100">
              <ul
                className="flex menu shadow bg-base-100 h-screen"
                id="MenuDesplegable"
              >
                <li>
                  <a>inicio</a>
                </li>
                <li>
                  <a>Libros</a>
                </li>
                <li>
                  <a>Escuelas</a>
                </li>
                <li>
                  <a>Terciarios</a>
                </li>
                <li>
                  <a>Varios</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-center logo">
        <a className="btn btn-ghost normal-case text-xl">Ruadis</a>
      </div>
      <div className="busqueda input-group">
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Busca aquí"
          className="input input-bordered w-full bg-gray-700"
        ></input>
      </div>
      <div className="itemsMenu">
        <ul className="menu menu-horizontal">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Libros</a>
          </li>
          <li>
            <a>Escuelas</a>
          </li>
          <li>
            <a>Terciarios</a>
          </li>
          <li>
            <a>Varios</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end perfil">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { HeaderRuadis };
