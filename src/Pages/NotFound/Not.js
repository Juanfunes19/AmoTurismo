import React from 'react';
import "./Not.css"
import error from "./error404.jpg"

const Not = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={error} alt="error 404" className='error' />
    </div>
  )
}

export default Not