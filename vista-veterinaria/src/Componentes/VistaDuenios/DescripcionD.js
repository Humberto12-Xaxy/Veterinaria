import React from 'react'

export default function DescripcionD(props) {
    return (
        <div>
            <p><span>Id del dueño: </span>{props.id}</p>
            <p><span>Nombre del dueño: </span>{props.nombre}</p>
            <p><span>Telefono del dueño: </span>{props.telefono}</p>
            <p><span>Direccion: </span>{props.direccion}</p>
        </div>
    )
}
