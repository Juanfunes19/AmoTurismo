import React from 'react';
import "./Previaje.css";
import previaje from "./LOGO.png"

const Previaje = () => {
  return (
    <>
    <div className='fondo-previaje d-flex flex-column justify-content-center justify-items-center align-items-center'>
      <img src={previaje} alt="logo-previaje" className='previaje' />
      <h3 className='texto text-center p-5 mx-0 mx-sm-5'  id='texto'>Previaje es un programa de preventa turística que te reintegra el 50% del 
        valor de tu viaje en crédito, para viajar y disfrutar de todos los destinos de 
        Argentina, desde noviembre de 2021 y durante todo el 2022.</h3>
    </div>

    <div className='d-flex flex-column flex-md-row'>
      <div className='col-md-6 parteA'>
        <h2 className='m-4'>Te damos <br/><b>un ejemplo</b></h2>
      </div>
      <div className='col-md-6 parteB'>
        <p className='m-5 '>Voy a viajar en auto junto a mi familia (3 integrantes en total) a conocer las Cataratas de 
          Iguazú en Marzo 2022 y reservo un hotel por 3 noches. La factura del alojamiento es por $8.000.
          Como necesito un gasto mínimo de $10.000 para solicitar el beneficio entonces aprovecho y reservo 
          en una agencia de viajes la excursión al Parque Nacional Iguazú por un total de $4.000. Las facturas de 
          las 2 compras suman un total de $12.000 con lo cual recibiré un crédito de $6.000 para utilizar a partir de Marzo.</p>
      </div>
    </div>
    </>
    
  )
}

export default Previaje