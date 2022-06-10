import clsx from 'clsx';
import React, { useState } from 'react'
import Sticky from 'react-stickynode';

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
        <div className="container">
          <img src="./media/logo/logo.svg" alt="logo" className="navbar-brand h-35px" href="https://hipo-frontend-2-0.vercel.app/portfolio" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </Sticky>    
  )
}

export default Header