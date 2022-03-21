import React from 'react';
import "./Contacto.css"

const Contacto = () => {
  return (
    <div className='form-pag'>
      <form className="row p-5 ">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress"  />
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Provincia</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-12">
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Consulta</label>
    <input type="text" className="form-control p-5" id="inputAddress2"  />
  </div> 
  <div className="col-12">
    <button type="submit" className="btn btn-primary mt-3">Enviar</button>
  </div>
</form>
    </div>
  )
}

export default Contacto