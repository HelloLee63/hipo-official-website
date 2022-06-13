import React from 'react'

const InterestRatesCard = props => {

  const {title} = props

  return (
    <div className='card product-card'>
      <div className='card-body ps-4 pe-4'>
        <div className="close">    
        </div>
        <div className="minimize">                    
        </div>
        <div className="zoom">          
        </div>

        <div className="card-title mt-4">{title}</div>
        <div className='pt-3'>
          <table className="table">
            <thead className="table-header">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Duration</th>
                <th scope="col">ETH</th>
                <th scope="col">USDC</th>
                <th scope="col">USDT</th>
                <th scope="col">DAI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-body">
                <th scope="row">1</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
              <tr className="table-body">
                <th scope="row">2</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
              <tr className="table-body">
                <th scope="row">3</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
              <tr className="table-body">
                <th scope="row">4</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
              <tr className="table-body">
                <th scope="row">5</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
              <tr className="table-body">
                <th scope="row">6</th>
                <td>5 Days</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
                <td>6.08%</td>
              </tr>
            </tbody>
          </table> 
        </div>

      </div>
    </div>   
  )
}

export default InterestRatesCard