const Header = () => {
  return (
    <>
      <header id="header" className="p-2">
        {/*  */}
         <div  id="displayon" >
              <button id="size" type="button" className=" btn text-black btn-outline-light me-2">
                Login
              </button>
              <button id="size" type="button" className=" btn btn-warning">
                Sign-up
              </button>
            </div>
        {/*  */}
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="about" >
                <a href="#" className="nav-link px-2 text-black">
                  About
                </a>
              </li>
            </ul>
            <form  className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">     
              <input id="search-bar"
                type="search"
                className="form-control form-control-dark "
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div  id="loginbtn" className="text-black">
              <button type="button" className="btn text-black btn-outline-light me-2">
                Login
              </button>
              <button  type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header