import React from 'react'

export default function ProductoImagen(props) {
    return (
        <div>
            <img src={props.url} alt={'Imagen de nuestro producto'} className={props.clase}/>
        </div>
    )
}
