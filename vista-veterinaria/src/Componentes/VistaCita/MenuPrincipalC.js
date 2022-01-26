import React from 'react';
import { useState,useEffect } from 'react';
import '../assets/css/estilos.css';
import Actualizar from './Actualizar';
import Addcita from './AddCita';
import Buscar from './Buscar';
import CitaCMascota from './CitaCMascota';
import DeleteC from './DeleteC';
import TablaCita from './TablaCita';
export default function MenuPrincipalC() {
    const [citas, setCitas] = useState(null);
    const [cita,setCita] = useState(null);
    const [estado,setEstado] = useState(1);
    useEffect(()=>{
        obtenerCitas();
    },[])
    const obtenerCitas = async () => {
        const dato = await fetch('http://localhost:9999/listCita');
        const citaA = await dato.json();
        setCitas(citaA);
    }
    
    return(
        <div className='tabla'>
            {citas!==null && <TablaCita citas ={citas} onCitaChange={setCita} onChangeEstado={setEstado} estado={estado}/>}
            {estado===1 && <CitaCMascota cita = {cita}/>}
            {estado===3 && <DeleteC onCitasChange={setCitas} cita={cita}/>}
            <div className="contenedor">
                {estado===2 && <Addcita onCitasChange={setCitas}/>}
                {estado===2 && <Actualizar onCitasChange={setCitas}/>}
                {estado===2 && <Buscar onCitasChange={setCitas}/>}
            </div>
        </div>
    );
}
