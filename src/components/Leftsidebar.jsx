import { NavLink } from "react-router-dom";


const LeftSideBar = ( ) => {

  return <>
      <div id="left-bg" className="d-flex flex-column flex-shrink-0 p-3  " style={{ height:"100vh"}} >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="30"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 font" style={{ zIndex:3 }}><h1 id="moments">ShareYour Moments!</h1></span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li  className="nav-item">
            <NavLink to="/"  className={`nav-link text-black`} aria-current="page">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to="/Creat-Post" className={`nav-link text-black ${(e)=>{ return e.isActive ? 'active':""}}`}>
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
             Create Post
            </NavLink>
          </li>
           <li>
          <NavLink to="/Fetch" className={`nav-link text-black ${(e)=>{ return e.isActive ? 'active':""}}`}>
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
             Fetch API
            </NavLink>
          </li>
        </ul>
        <hr />
        <div>
          <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a  className={`nav-link text-black`} aria-current="page" >
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Settings
            </a>
          </li>
          </ul>
        </div>
    </div>
    </>
};

export default LeftSideBar;
