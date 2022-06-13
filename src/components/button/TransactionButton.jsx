const TransactionButton = ({ title }) => {

  return (
    <div className="transaction-button">
      <div type='button' className="btn btn-transaction btn-lg">{title}</div>
    </div>    
  )
}

export default TransactionButton