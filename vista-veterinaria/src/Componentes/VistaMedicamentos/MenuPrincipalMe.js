import React from 'react';
import { useState, useEffect } from 'react';
import TablaMedicamento from './TablaMedicamento';
import MedicamentoCMascota from './MedicamentoCMascota';
import ActualizarMe from './ActualizarMe';
import DeleteMe from './DeleteMe';
import AddMedicamento from './AddMedicamento';
import BuscarMe from './BuscarMe';
const MenuPrincipalMe = () => {
    const [medicamentos, setMedicamentos] = useState(null);
    const [medicamento,setMedicamento] = useState(null);
    const [estado,setEstado] = useState(1);
    useEffect(()=>{
        obtenerDuenios();
        console.log(medicamento)
    },[])
    const obtenerDuenios = async () => {
        const dato = await fetch('http://localhost:18079/listMedicamentos');
        const medicamentoA = await dato.json();
        setMedicamentos(medicamentoA);
        console.log(medicamentos)
    }
    return (
        <div className='tabla'>
            {medicamentos!==null && <TablaMedicamento medicamentos ={medicamentos} onMedicamentoChange={setMedicamento} onChangeEstado={setEstado} estado={estado}/>}
            {estado===1 && <MedicamentoCMascota medicamento = {medicamento}/>}
            {estado===3 && <DeleteMe onMedicamentosChange={setMedicamentos} medicamento={medicamento}/>}
            <div className="contenedor">
                {estado===2 && <AddMedicamento onMedicamentosChange={setMedicamentos}/>}
                {estado===2 && <ActualizarMe onMedicamentosChange={setMedicamentos}/>}
                {estado===2 && <BuscarMe onMedicamentosChange={setMedicamentos}/>} 
             </div>
        </div>
    )
}

export default MenuPrincipalMe;
