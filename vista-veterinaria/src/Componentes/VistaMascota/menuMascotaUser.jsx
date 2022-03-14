import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/css/estilos.css';
import TablaMascotaU from './tablaMascotaU';
import RegisterM from './AddMascotaUser';
import Login from '../loginpage/login';
export default function MenuPrincipalMA() {
    const [mascotas, setMascotas] = useState(null);
    const [mascota, setMascota] = useState(null);
    const [estado, setEstado] = useState(1);

    const [cookie, setCookie] = useState(false);
    const resultadoCookie = document.cookie;
    if (resultadoCookie.length > 0){
      setCookie(true)
    } 
    
    useEffect(() => {
        obtenerMascotas();
    }, [])
    const obtenerMascotas = async () => {
        const dato = await fetch('http://localhost:9998/listMascotas');
        const mascotaA = await dato.json();
        setMascotas(mascotaA);
       
    }
    return (
    <>{cookie?(
      <div className="tabla">
            {mascotas !== null && <TablaMascotaU mascotas={mascotas} onMascotaChange={setMascota} onChangeEstado={setEstado} estado={estado} />}
            {mascotas !== null && <RegisterM mascotas={mascotas} onMascotasChange={setMascotas} />}

        </div>
    ):<Login/>}
      </>
        
    )
}