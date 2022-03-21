import React from 'react';
import "./Nav.css";
import Logo from "./logog.png"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><img className='logo' src={Logo} alt="Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-5">
        <li className="nav-item">
          <Link className="nav-link active"  id='pages' aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  id='pages' aria-current="page" to="/previaje">PREVIAJE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id='pages' aria-current="page" to="/nosotros">NOSOTROS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id='pages' aria-current="page" to="/contacto">CONTACTO</Link>
        </li>
      </ul>
      <form className="d-flex d-none d-lg-flex" id='form-busqueda'>
        <input className="form-control me-2" type="search" placeholder="Tu destino" aria-label="Search" />
        <button className="btn " id='btn' type="submit">BUSCAR</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Nav