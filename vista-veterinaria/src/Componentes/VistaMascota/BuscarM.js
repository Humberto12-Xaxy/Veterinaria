import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const BuscarM = (props) => {
    const [tipo, setTipo] = useState('');
    const peticionPost = (dato,url)=>{
        axios.post(url,dato).then(response=>{
            props.onMascotasChange(response.data);
        })
    }
    const handleClick= ()=>{
        const dato = {nombre:'',tipo:tipo,idDuenio:'',idCita:0,idMedicamento:0,fechaIngreso:'',razon:''};
        peticionPost(dato,'http://localhost:9998/mascota/tipo');
    }
    const hundleClick = () =>{
        axios.get('http://localhost:9998/listMascotas').then(response=>{
            props.onMascotasChange(response.data);
        }).catch(console.log('No se pudo actualizar'));
    }
    return (
        <div className='aniadir busc margen'>
            <h2>Buscar tipo de mascota</h2>
                <div className="inputs">
                    <input className='input-group-text' type='text' id='tipoM3' placeholder='Tipo de Mascota' onChange={e=>setTipo(e.target.value)}/>
                    <button className='btn btn-dark'  onClick={()=>{
                        if(tipo!==''){ 
                            handleClick();
                            setTipo('');
                            document.getElementById('tipoM3').value=''
                        }
                        else alert('Rellene el formulario');
                    }}>Actualizar</button></div>
                    <button className='btn btn-dark botn2' onClick={()=>{
                        hundleClick();
                    }}>Limpiar</button>
                </div>
        </div>
    )
}

export default BuscarM;
