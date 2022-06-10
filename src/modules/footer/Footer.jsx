const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center pt-5 pb-1 mt-5">
        <img className="h-40px" src="./media/logo/logo.svg" alt="" />
      </div>
      <footer className="row pt-2 pb-3">
        <div className="col col-lg-1 py-2">
         
        </div>

        <div className="col-12 col-lg-3 py-2">
          <h4 className="text-center mb-3">Documentation</h4>
          <ul className="nav flex-column align-items-center">
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-12 col-lg-3 py-2">
          <h4 className="text-center mb-3">Community</h4>
          <ul className="nav flex-column align-items-center">
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Twitter</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Github</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Discord</a></li>
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Medium</a></li>
          </ul>
        </div>

        <div className="col-12 col-lg-3 py-2">
          <h4 className="text-center mb-3">Product</h4>
          <ul className="nav flex-column align-items-center">
            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-muted">Hipo App</a></li>
          </ul>
        </div>

        <div className="col col-lg-1 py-2">
         
        </div>
      </footer>
    </>
  )
}

export default Footer