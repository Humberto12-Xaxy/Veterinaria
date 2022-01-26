import React from 'react'
import {Routes,Route,} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';
import MenuPrincipal from './VistaCita/MenuPrincipalC';
import MenuPrincipalD from './VistaDuenios/MenuPrincipalD';
import MenuPrincipalM from './VistaMascota/MenuPrincipalM';
import MenuPrincipalMe from './VistaMedicamentos/MenuPrincipalMe.js';
export default function AppRouter() {
    return (
        <div>
            <NavBar/>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path = '/citas' element={<MenuPrincipal/>}/>
                        <Route path='/duenios' element={<MenuPrincipalD/>}/>
                        <Route path='/mascotas/' element={<MenuPrincipalM/>}/>
                        <Route path='/medicamentos/' element={<MenuPrincipalMe/>}/>
                    </Routes>
                </div>
        </div>
    )
}
