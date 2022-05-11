import React from 'react'

function Noticia() {

    const Noticia = {
        titulo: 'Este es el titulo',
        descripcion: 'Esta es la descripcion',
    }
    
    const { titulo, descripcion } = Noticia;

    return (
        <div>
            <h1>{titulo}</h1>
            <section>{descripcion}</section>
        </div>
    )
}

export default Noticia