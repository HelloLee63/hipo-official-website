import React from 'react'
import DescriptionCard from '../../components/card/DescriptionCard'
import ProductCard from '../../components/card/ProductCard'

const ProductModule = () => {
  return (
    <>
      <div className='row g-xl-8'>  
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <DescriptionCard title='Fixed-rate Fixed-term Lending Protocol' text='The First Fixed-rate Fixed-term Lending Protocol for Real. You could start a fixed-term borrowing or lending at any time.' />
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row g-xl-8 py-5'>  
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <ProductCard title="Fix Rates"/>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row g-xl-8 py-5'>  
        <div className='col-md-6'>
          <DescriptionCard title='Fixed-rate Fixed-term Lending Protocol' text='The First Fixed-rate Fixed-term Lending Protocol for Real. You could start a fixed-term borrowing or lending at any time.' />
        </div>
        <div className='col-md-6'>
          <ProductCard title="Fix Rates"/>
        </div>
      </div>
      <div className='row g-xl-8 py-5'> 
        <div className='col-md-6'>
          <ProductCard title="Fix Rates"/>
        </div> 
        <div className='col-md-6'>
          <DescriptionCard title='Fixed-rate Fixed-term Lending Protocol' text='The First Fixed-rate Fixed-term Lending Protocol for Real. You could start a fixed-term borrowing or lending at any time.' />
        </div>        
      </div>
      <div className='row g-xl-8 py-5'>  
        <div className='col-md-6'>
          <DescriptionCard title='Fixed-rate Fixed-term Lending Protocol' text='The First Fixed-rate Fixed-term Lending Protocol for Real. You could start a fixed-term borrowing or lending at any time.' />
        </div>
        <div className='col-md-6'>
          <ProductCard title="Fix Rates"/>
        </div>
      </div>
      <div className='row g-xl-8 py-5'> 
        <div className='col-md-6'>
          <ProductCard title="Fix Rates"/>
        </div> 
        <div className='col-md-6'>
          <DescriptionCard title='Fixed-rate Fixed-term Lending Protocol' text='The First Fixed-rate Fixed-term Lending Protocol for Real. You could start a fixed-term borrowing or lending at any time.' />
        </div>        
      </div>
    </>
  )
}

export default ProductModule