import React from 'react';
import { useEffect } from 'react';
import ProductoImagen from './ProductoImagen'
import img from './assets/Imagenes/bienvenida.jpg'
import ProductoTexto from './ProductoTexto';
export default function HomePage() {
    useEffect(()=>{
        document.title = 'Veterinaria';
    })
    return (
        <div>
            <ProductoImagen url={img} clase='ImgBienvenida'/>
            <ProductoTexto/>
        </div>
        
    )
}
