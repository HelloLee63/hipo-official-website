import React from 'react'
import AppButton from '../button/AppButton'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='carousel-custom d-flex flex-column justify-content-center align-items-center p-3'>
              <div className='w-100 carousel-custom-text d-flex justify-content-center p-3'>
                Decentral Fixed Interest Protocol
              </div>
              <AppButton />
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Carousel