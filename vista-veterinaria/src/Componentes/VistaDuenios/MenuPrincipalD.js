import React from 'react'
import { useState, useEffect } from 'react'
import TablaDuenio from './TablaDuenio';
import '../assets/css/estilos.css';
import DuenioCmascota from './DuenioCMascota';
import DeleteD from './DeleteD';
import AddDuenio from './AddDuenio';
import ActualizarD from './ActualizarD';
import BuscarD from './BuscarD';
export default function MenuPrincipalD() {
    const [duenios, setDuenios] = useState(null);
    const [duenio,setDuenio] = useState(null);
    const [estado,setEstado] = useState(1);
    useEffect(()=>{
        obtenerDuenios();
        console.log(duenio)
    },[])
    const obtenerDuenios = async () => {
        const dato = await fetch('http://localhost:18080/listDuenios');
        const duenioA = await dato.json();
        setDuenios(duenioA);
    }
    return (
        <div className='tabla'>
            {duenios!==null && <TablaDuenio duenios ={duenios} onDuenioChange={setDuenio} onChangeEstado={setEstado} estado={estado}/>}
            {estado===1 && <DuenioCmascota duenio = {duenio}/>}
            {estado===3 && <DeleteD duenio={duenio} onDueniosChange={setDuenios}/>}
            <div className="contenedor">
                {estado===2 && <AddDuenio onDueniosChange={setDuenios}/>}
                {estado===2 && <ActualizarD onDueniosChange={setDuenios}/>}
                {estado===2 && <BuscarD onDueniosChange={setDuenios} />} 
             </div>
        </div>
    )
}
