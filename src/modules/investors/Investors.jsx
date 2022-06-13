import InvestorCard from "../../components/card/InvestorCard"

const Investors = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8 pt-5 justify-content-center'>
        <div className='col-md-3'>
          <InvestorCard icon="./media/logo/algorand_logo_mark_black.svg"/>
        </div>
        <div className='col-md-3'>
          <InvestorCard />
        </div>
        <div className='col-md-3'>
          <InvestorCard />
        </div>
        <div className='col-md-3'>
          <InvestorCard />
        </div>
      </div>
    </>
  )
}

export default Investors