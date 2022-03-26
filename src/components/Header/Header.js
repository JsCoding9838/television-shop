import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section container-fluid p-0'>
            {/* <h2>Electronics Products</h2> */}

            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary px-5">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-uppercase" href="#">Television Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">Our Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;