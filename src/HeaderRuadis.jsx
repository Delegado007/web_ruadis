import React from "react";
import "./HeaderRuadis.css";
import { useState } from "react";

import { current } from "daisyui/src/colors";

function HeaderRuadis() {
  const [desplegarMenu, setDesplegarMenu] = useState(false);
  const actualizar = (e) => {
    setDesplegarMenu(e.target.checked);
  };
  const actualizarBusqueda = function (event) {
    if (event.target.value.length > 0) {
      const boton = document.querySelector("#SearchBarClearIconWrapper");
      boton.className = "sc-cEvuZC eblfxh";
    } else {
      const boton = document.querySelector("#SearchBarClearIconWrapper");
      boton.className = "sc-cEvuZC noDispaly";
    }
  };
  const efectoFocus = function () {
    const div = document.querySelector("#SearchWrapper");
    div.className = "sc-iybRtq cYUjOG";
  };
  const efectoBlur = function () {
    const div = document.querySelector("#SearchWrapper");
    div.className = "sc-iybRtq ctSVqk";
  };
  const borrarImput = function () {
    const imput = document.querySelector("#searchInput");
    imput.value = "";
    const boton = document.querySelector("#SearchBarClearIconWrapper");
    boton.className = "sc-cEvuZC noDispaly";
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
      <div className="sc-iFMziU kYCuyq">
        <div
          id="SearchWrapper"
          data-component-locator="SearchBar"
          className="sc-iybRtq ctSVqk"
        >
          <div id="idWrapper" className="sc-iQtOjA caLrfK">
            <div alt="Search Icon" className="sc-ifAKCX gQUJAq">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="6"
                  stroke="#68676F"
                  strokeWidth="1"
                ></circle>
                <path
                  d="M15 15L11 11"
                  stroke="#68676F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
          <input
            id="searchInput"
            type="text"
            autoComplete="off"
            name="searchInput"
            aria-label="search text"
            placeholder="Busca por titulo"
            maxLength="300"
            data-test-locator="SearchBar-Input"
            className="sc-fHxwqH AfTtS"
            onFocus={efectoFocus}
            onBlur={efectoBlur}
            onChange={actualizarBusqueda}
          ></input>
          <div id="SearchBarClearIconWrapper" className="sc-cEvuZC eblfxh">
            <button
              aria-label="clear search button"
              data-test-locator="SearchBarClearIcon"
              type="button"
              className="sc-kkGfuU eSFrNo"
              onClick={borrarImput}
            >
              <div alt="Cross in circle" className="sc-ifAKCX kneZas">
                <svg
                  width="22px"
                  height="22px"
                  fill="none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.10803 13.8964L13.8943 6.1084"
                    stroke="#68676F"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M6.10803 6.10834L13.8943 13.8964"
                    stroke="#68676F"
                    strokeLinecap="round"
                  ></path>
                  <circle cx="10" cy="10" r="9.5" stroke="#68676F"></circle>
                </svg>
              </div>
            </button>
          </div>
        </div>
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
