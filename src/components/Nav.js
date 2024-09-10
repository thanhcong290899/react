import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './cpn.css';

const Sidebar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <>
            <div className="row line justify-content-center align-items-center">
                <div className="col mt-2">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="form-control"
                        />
                        <div className="input-group-prepend">
                            <button
                                type="button"
                                className="form-control search-button"
                                onClick={handleSearch}
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row line align-items-center">
                <div className="col">
                    <Link to="/view" className="icon-text">
                        <i className="fa-solid fa-table-cells"></i>
                        <p className="mb-0"> View Content</p>
                    </Link>
                </div>
            </div>

            <div className="row line align-items-center">
                <div className="col">
                    <Link to="/add" className="icon-text">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <p className="mb-0"> Form Content</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
