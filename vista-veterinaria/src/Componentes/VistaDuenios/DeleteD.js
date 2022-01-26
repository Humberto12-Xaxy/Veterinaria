import React from 'react'
import { useState } from 'react';
import axios from'axios';
export default function DeleteD(props) {
    const dato = {idDuenio:0,nombre:'',telefono:'',direccion:''}
    var url='';
    const peticionPost = ()=>{
        axios.post(url,dato).then();

    }
    const handleclick = ()=>{
        axios.get('http://localhost:18080/listDuenios').then(response=>props.onDueniosChange(response.data)).catch('No se puso recibir los datos')
    }
    const eliminar = () =>{
        url= 'http://localhost:18080/duenio/delete';
        dato.idDuenio=props.duenio.idDuenio; dato.nombre=props.duenio.nombre; dato.telefono=props.duenio.telefono; dato.direccion = props.duenio.direccion;
        peticionPost();
        handleclick();
    }
    return (
        <div>
            
            {eliminar()}
            
        </div>
    )
}
