import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/css/estilos.css';
import TablaMascotaU from './tablaMascotaU';
import RegisterM from './AddMascotaUser';
export default function MenuPrincipalMA() {
    const [mascotas, setMascotas] = useState(null);
    const [mascota, setMascota] = useState(null);
    const [estado, setEstado] = useState(1);

    const [cookie, setCookie] = useState(false);
    console.log(document.cookie)
    useEffect(() => {
        obtenerMascotas();
    }, [])
    const obtenerMascotas = async () => {
        const dato = await fetch('http://localhost:9998/listMascotas');
        const mascotaA = await dato.json();
        setMascotas(mascotaA);
    }
    return (
        <div className="tabla">
            {mascotas !== null && <TablaMascotaU mascotas={mascotas} onMascotaChange={setMascota} onChangeEstado={setEstado} estado={estado} />}
            {mascotas !== null && <RegisterM mascotas={mascotas} onMascotasChange={setMascotas} />}

        </div>
    )
}