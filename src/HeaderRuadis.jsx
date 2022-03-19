import React from "react";
import "./HeaderRuadis.css";
// import { Menu } from "@headlessui/react";

function HeaderRuadis() {
  return (
    <div className="navbar bg-base-100 mb-0 shadow-xl" id="navegacion">
      <div className="navbar-start items">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
      </div>
      <div className="navbar-center logo">
        <a className="btn btn-ghost normal-case text-xl">Ruadis</a>
      </div>
      <div className="itemsMenu">
        <ul className="menu menu-horizontal">
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
