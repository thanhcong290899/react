import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cpn.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Header = () => {
    return (
        <>
            <div className="col-11 header-left">
                <h5>CMS</h5>
            </div>
            <div className="col-1 header">
                <div className="dropdown">
                    <i className="fa-solid fa-user dropdown-toggle" data-toggle="dropdown" aria-expanded="false"></i>
                    <div className="dropdown-menu dropdown-menu-custom">
                        <div className="icon-text">
                            <Link className='dropdown-item icon-text' >
                                <i className="fa-solid fa-user"></i>
                                <p className="mb-0">User Profile</p>
                            </Link>

                        </div>
                        <div className="icon-text">
                            <Link className='dropdown-item icon-text' to='/login'>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <p className="mb-0">Logout</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;
