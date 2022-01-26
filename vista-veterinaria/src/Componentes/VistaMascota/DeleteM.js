import React from 'react'
import { useState } from 'react';
import axios from'axios';
export default function DeleteM(props) {
    const [post, setPost] = useState(false)
    // const dato = {idMascota:0,nombre:'',tipo:'',idDuenio:0,idCita:0,idMedicamento:0, razon:''}
    // var url='';
    const peticionPost = (dato,url)=>{
        axios.post(url,dato).then(response=>{
            
        })
    }
    const eliminar = () =>{
        let url= 'http://localhost:9998/mascota/delete';
        peticionPost(props.mascota,url);
        hundleClick();
    }

    const hundleClick = () =>{
        axios.get('http://localhost:9998/listMascotas').then(response=>{
            props.onMascotasChange(response.data);
        }).catch(console.log('No se pudo actualizar'));
    }
    
    return (
        <div>
            
            {eliminar()}
            
        </div>
    )
}
