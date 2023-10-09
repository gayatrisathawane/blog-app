import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.svg'
const Navbar = () => {
  return (
    <div className='position-sticky top-0 bg-warning mt-0 p-0 navbar-container' >
      <nav className="navbar navbar-expand-lg   p-2 fs-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-lg-auto">
              <li className="nav-item">
                <Link className="nav-link ms-5 fw-bold" to="/posts">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5 fw-bold" to="#">Login</Link>
              </li>
             
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;