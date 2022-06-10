const InvestorCard = ({icon}) => {
  return (
    <>
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img alt='' src={icon} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>A blue bird</h3>
          <div>
          This a demo experiment to skew image container. It looks good.
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestorCard