import TokenIcon from "../icon/TokenIcon"

const TokenRadioButton = props => {

  const { isCollateral, tokens, assetSymbol } = props

  return (
    <>
      <form>
        <div className="d-flex justify-content-between flex-wrap">
        {tokens.map(token => (
          <div className='token-radio-button' key={isCollateral ? token.collateralAsset.symbol : token.symbol}>
            <label>
              <input type='radio' id='token-radio-button'
                value={isCollateral ? token.collateralAsset.symbol : token.symbol}
                checked={assetSymbol === (isCollateral ? token.collateralAsset.symbol : token.symbol)}            
                />                
              <TokenIcon 
                tokenIcon={isCollateral ? token.collateralAsset.icon : token.icon} 
                tokenSymbol={isCollateral ? token.collateralAsset.symbol : token.symbol}/>
            </label>
          </div>      
        ))}
        </div>
      </form>  
    </>
  )
}

export default TokenRadioButton