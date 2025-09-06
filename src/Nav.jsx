
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav(){
    return(
        <>
        <section>
         <nav>
            <div className="nav d-flex mt-3">
                <div className="d-md-flex d-lg-none">
                    <a className="text-dark ms-2 ms-md-4 fs-1" href=""><i class="bi bi-list"></i></a>
                    <p className="d-none d-md-block menu-name">Menu</p>
                </div>

                <div>
                    <h2 className="fs-1 fw-bolder mt-1 mt-lg-3">AMADEA</h2>
                </div>

                <div>
                    <a className="text-secondary fs-3 d-lg-none me-md-2" href=""><i class="bi bi-lock-fill"></i></a>
                </div>
                  
               <div>
                <ul className="d-lg-flex gap-3 d-none d-md-none mt-3">
                    <li className="nav-link ms-3">
                        <Link to="/" className="text-decoration-none nav-home">Home</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/blog" className="text-decoration-none text-secondary">Blog</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/contact" className="text-decoration-none text-secondary">Contact Us</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/about" className="text-decoration-none text-secondary">About Us</Link>
                    </li>
                </ul>
                </div>
                <div className="d-lg-flex gap-4 d-none d-md-nonen mt-4 small-icon">
                    <a className="heart-icon fs-5" href=""><i class="bi bi-suit-heart"></i></a>
                    <a className="heart-icon fs-5" href=""><i class="bi bi-handbag"></i></a>
                    <a className="heart-icon fs-6" href=""><i class="bi bi-search"></i></a>
                </div>

            </div>

            <div className="d-flex container products d-lg-none">
                <input className="search-input" type="text" placeholder="Search products..." />
                <a className="search-icon text-white fs-6 pt-2 text-center" href=""><i class="bi bi-search"></i></a>
            </div>
         </nav>
        </section>
        </>
    )
}


