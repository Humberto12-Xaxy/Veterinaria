import React from 'react';
import './assets/css/estilos.css';
import ProductoImagen from './ProductoImagen';
import img from './assets/Imagenes/mascotas.png';
import { Link, NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
        <div className='MenuVeterinaria'>
            <div className="logo">
                <ProductoImagen url={img} clase='imgLogo'/>
                <p className='tituloHeader'>Veterinaria "El pulgas"</p>
            </div>
            <nav className="">
            <div className="botones" id="navbarNavAltMarkup">
                <Link to="/" className="btn btns inicio"> Inicio</Link>
                <div className="">
                    <NavLink exact activeClassName="active" to="/citas" className="btn btns"> Citas </NavLink>
                    <NavLink exact activeClassName="active" to="/duenios" className="btn btns"> Dueños </NavLink>
                    <NavLink exact activeClassName="active" to="/mascotas" className="btn btns"> Mascotas</NavLink>
                    <NavLink exact activeClassName="active" to="/medicamentos" className="btn btns">Medicamentos</NavLink>
                </div>
            </div>
        </nav>
        </div>
        
    )
}
