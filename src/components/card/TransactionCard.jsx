import TransactionButton from '../button/TransactionButton'

const TransactionCard = props => {

  const { title } = props

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
    </div>

    {/* {tokenItems.map(item => (
      <div key={item.title} className='card-body'>
        <div className='transaction-item-title pt-5 pb-2'>
          {item.title}
        </div>
        
        <TokenRadioButton
          isCollateral={item.isCollateral}
          tokens={item.assets}
          assetSymbol={item.assetSymbol}
          setAssetSymbol={item.setAssetSymbol}
          setAmount={setAmount}            
          />
            
      </div>
    ))} */}

    <div className="card-body  ps-4 pe-4">
      <TransactionButton title="Pledge"/>
    </div>
  </div>   
  )
}

export default TransactionCard