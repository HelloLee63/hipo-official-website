import clsx from 'clsx'
import React from 'react'

const ProductCard = props => {

  const {cardTitle, pool, tokenItems, durationItem, content, transactionButton, amount, setAmount, transaction, isWorking, balanceIcon, ...transactionFormProps} = props

  return (
    <div className='card product-card'>
      <div className="card-title">Fixed Rates</div>
      <table className="table">
          <thead className="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Duration</th>
              <th scope="col">ETH</th>
              <th scope="col">USDC</th>
            </tr>
          </thead>
          <tbody>
            {/* {pools.map(pool => (
              <tr key={pool.bToken.symbol} className="table-body">
                <th scope="row">{pool.index}</th>
                <td>{ pool.duration.description }</td>
                <td>{ formatToken(getBondPrice(pool.bondAsset.address, pool.duration.duration), { scale: 18 }) ?? '-' }</td>
                <td>@mdo</td>
              </tr>
            ))} */}
            <tr className="table-body">
              <th scope="row">1</th>
              <td>5 Days</td>
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
            <tr className="table-body">
              <th scope="row">2</th>
              <td>5 Days</td>
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>5 Days</td>
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
            <tr className="table-body">
              <th scope="row">4</th>
              <td>5 Days</td>
              
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
            <tr className="table-body">
              <th scope="row">5</th>
              <td>5 Days</td>
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
            <tr className="table-body">
              <th scope="row">6</th>
              <td>5 Days</td>
              <td>6.08%</td>
              <td>6.08%</td>
            </tr>
          </tbody>
        </table>    
    </div>   
  )
}

export default ProductCard