import React from 'react';
import "./Nosotros.css"

const Nosotros = () => {
  return (
    <>
    <div className='fondoNosotros d-flex align-items-end'>
      <h2 className='titulonosotros px-5'><span className='barra'>l</span>Sobre Nosotros</h2>
    </div>
    <div className='row'>
      <div className='col-md-6 nosotros1 p-5'>
        <p>Somos una línea aérea creada por Indigo Partners, fondo privado de inversión que tiene más de 20 años de experiencia
          desarrollando exitosamente aerolíneas Ultra Low Cost a nivel mundial. En la actualidad, tiene inversiones en Wizz Air 
          (Europa del Este), Volaris (México) y Frontier Airlines (Estados Unidos).AmoTurismo es liderada por un equipo de trabajo
          de primer nivel, múltiples nacionalidades y muchos años de experiencia en el mercado aéreo nacional y mundial.</p>
      </div>
      <div className='col-md-6 Nosotros2 p-5'>
        <h3>MISION</h3>
        <p>Estamos aquí para conectar personas mediante los viajes a tarifas Ultra Bajas.</p>
        <h3>VISION</h3>
        <p>Nos vemos conectando a millones de personas en Sur América.</p>#5c96cc
      </div>
    </div>
    </>
    
  )
}

export default Nosotros