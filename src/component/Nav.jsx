import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import logo from '../assets/image/png/logo1.webp'
const Nav = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    const moment = () => {
        setShow(!true);
    };
  return (
      <div>
          <Container className="nav_container">
              <nav className=" pt3">
                  <div className="d-flex align-items-center  justify-content-between">
                      <div>
                          <img className="cursor_pointer logo_width" src={logo} alt="#" />
                      </div>                      
                          <ul className={show ? "open" : ""}>
                              <li><a href="#home" onClick={moment} className="fw-medium mb-0 ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Home</a></li>
                              <li><a href="#features" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Your benefits</a>  </li>
                              <li><a href="#process" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height">Our process</a></li>
                              <li><a href="#brand" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Our works</a></li>
                              <li> <a href="#start" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Testimonials</a> </li>
                              <li><a href="#footer" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Start a project</a></li>
                              <div className="d-lg-none d-block">
                                  <button className='  border-0 ff_dmsans fs_14  btn_getstarted mt-0  text-uppercase fw-bold'>Get started</button>
                              </div>
                          </ul>
                      <div className="d-xl-block d-none">
                          <button className=' border-0 ff_dmsans fs_14  btn_getstarted mt-0  text-uppercase fw-bold'>Get started</button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between z_index d-block d-xl-none">
                          <button className="open  navicon  navi " onClick={() => { setShow(!show); }}>
                              {show ? <Close /> : <Navicons />}
                          </button>
                      </div>
                  </div>
              </nav>
          </Container> 
      </div>
  )
}
export default Nav