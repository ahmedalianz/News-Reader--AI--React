// import { Link } from 'react-router-dom';
import './navbar.scss'
// import { useState } from 'react'
const NavBar = () => {
  // const [expand, setExpand] = useState('')
  // const expandSearch = () => {
  //   setExpand('expanded')
  // }
  // const dispandSearch = () => {
  //   setExpand('')
  // }

  return (<>
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <h1 className="logo">
              News
            </h1>
          </div>
          {/* <div className="col-lg-6 col-md-4">
            <div className="search">
              <div className='icon'>
                <i className="fas fa-search"></i>
              </div>
              <input
                placeholder="Search…"
                className={`${expand} form-control`}
                onFocus={expandSearch}
                onBlur={dispandSearch}
              />
            </div>
          </div> */}
          <div className="col-md-6 col-sm-12">
            <div className="social">
              <a href="https://www.facebook.com/ahmed.tiger.300/" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/ahmedalian/" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/ahmedalianz?tab=repositories" target="_blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>);
}


export default NavBar;