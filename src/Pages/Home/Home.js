import React from 'react';
import "./Home.css";
import ilustracion from "./1-gente.png";

const Home = () => {
  return (
    // <!-- inicio form section -->
    <>
    
    <div class="container-fluid2">
      <div class="row pt-5">
        <div class="col-lg-8 d-flex flex-column justify-content-center align-content-center pt-5 titulos">
          <h1 class="text-center titulo-principal">VOS ELEGIS EL LUGAR <br /> NOSOTROS TE LLEVAMOS</h1>
          <p class="text-center parrafo">Busca tu destino, elegi la fecha y prepara la valija!
            Aprovecha grandes descuentos y tarifas flexibles.</p>
        </div>
        <div class="col-lg-4 col-12 formulario pt-5 d-flex justify-content-center">
          <div class="card">
            <h5 class="ingresa-cuenta">Ingresa a tu cuenta</h5>
            <form action="">
              <input type="text" placeholder="Email" class="form-controll mt-3" />
              <input type="text" placeholder="Contraseña" class="form-controll mt-3 mb-3" />
              <button class="btn  btn-ingresar">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>


    <div className="section-1 text-center pt-5 pb-1 ps-5 pe-5 texto-section1">
      <span>
        <i className="bi bi-geo-alt-fill"></i>
      </span>
      <h2>PROGRAMA PRE-VIAJE</h2>
      <p className="px-5">Previaje es un programa de preventa turística que te reintegra el 50% del valor de tu viaje en crédito, para viajar y disfrutar de todos los destinos de Argentina, desde noviembre de 2021 y durante todo el 2022.</p>
    </div>

    <div class="section-2 justify-content-center d-flex align-content-center">
      <div class="row d-flex">
        <div class="col-lg-7 pt-0 ps-5 texto-section2">
          <p class="p-5 text-center">Realizá tus compras anticipadas en 2021 para viajar desde noviembre 2021 y durante todo 2022. Por cada comprobante que presentes recibirás el 50% de lo que hayas gastado a modo de crédito, para realizar más compras en el sector turístico hasta el 31 de diciembre de 2022.¿Qué compras generan crédito? Todos los servicios turísticos comercializados por prestadores inscriptos. Agencias de viaje, alojamiento, vuelos y ómnibus de larga distancia tienen un tope de $100.000. Los demás prestadores tienen un tope de $5.000 en total.Una vez realizada la precompra de tu viaje, registrate con tu usuario y contraseña de Mi Argentina, completá el formulario y cargá los comprobantes. Los comprobantes deben estar emitidos con tu nombre, tipo y número de documento.</p>
        </div>
        <div class="col-lg-5 pt-5 pe-5 pb-5 ps-0 d-flex justify-content-center">
          <img class="img-section2" src={ilustracion} alt="" />
        </div>
      </div>
    </div>

    <div class="section-3 p-5">
    <div class="actividades">
      <h3 class="text-center section-title">Actividades Incluidas</h3>
      <hr />
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-xl-3 text-center">
        <span class="card-icon"><i class="bi bi-cash"></i></span><br />
        <span class="text center"><b>Límites del beneficio</b></span>
        <p>La posibilidad de acceder a tu beneficio se habilitará una vez alcanzado el monto mínimo acumulado de $10.000 entre uno o más comprobantes. El importe mínimo por comprobante es de $1000.</p>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-3 text-center">
        <span class="card-icon"><i class="bi bi-calendar"></i></span><br />
        <span class="text center"><b>Límites de tiempos</b></span>
        <p>Si pensás viajar en noviembre 2021 Serán válidos aquellos comprobantes emitidos entre: el 12 de agosto y el 15 de septiembre de 2021.Los comprobantes podrán ser cargados hasta: el 26 de septiembre Si pensás viajar en diciembre 2021</p>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-3 text-center">
        <span class="card-icon"><i class="bi bi-sun"></i></span><br />
        <span class="text center"><b>Donde puedo utilizarlo</b></span>
        <p>El crédito se puede utilizar en toda la cadena turística del país hasta el 31 de diciembre de 2022. Conocé los rubros y actividades alcanzadas haciendo click aquí.</p>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-3 text-center">
        <span class="card-icon"><i class="bi bi-journal-text"></i></span><br/>
        <span class="text center"><b>Requisitos</b></span>
        <p>Puede acceder al beneficio cualquier persona física mayor de 18 años a través de su CUIT o CUIL, que tenga validación de identidad en Mi Argentina y que declare un domicilio en la República Argentina.</p>
      </div>
    </div>
  </div>

    </>
  )
}

export default Home