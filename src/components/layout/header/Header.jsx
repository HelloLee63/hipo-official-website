import clsx from 'clsx';
import React, { useState } from 'react'
import Sticky from 'react-stickynode';
import PrimaryButton from '../../button/PrimaryButton';

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (  
    <Sticky enabled={true} top={0} bottomBoundary={5000} onStateChange={handleStateChange} innerZ={199}>
      <nav id="sticky_navbar" className={clsx("navbar navbar-expand-lg p-3 navbar-light navbar-sticky", {'navbar-sticky-active': isSticky})} style={{backgroundColor:"#red"}}>
        <div className="container d-flex justify-content-bewteen">          
          <img src="./media/logo/logo-black.png" alt="logo" className="h-40px" href="https://hipo-frontend-2-0.vercel.app/portfolio" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <PrimaryButton title="Use App"/>
          </div>          
        </div>
      </nav>
    </Sticky>    
  )
}

export default Header