import React from 'react';

const DescripcionM = (props) => {
    return (
        <div className='descripcion'>
            <p><span>Id de la mascota: </span>{props.id}</p>
            <p><span>Nombre de la mascota: </span>{props.nombre}</p>
            <p><span>Tipo de la mascota: </span>{props.tipo}</p>
            <p><span>Razon de ingreso: </span>{props.razon}</p>
        </div>
    );
}

export default DescripcionM;
