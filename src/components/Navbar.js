import React from "react";
import './Navbar.css';

const Navbar = ({ items }) => {
    items = items || [];

    const handleItemClick = (e) => {
        e.preventDefault();
        return false;
    }

    const calculateSum = () => {
        if (items.length > 0) {
            return (
                <div className="costLine">
                    <a className="dropdown-item d-inline-flex justify-content-between" href="/">
                        <span>cost</span> <span className="price">{items.reduce((p, c) => p + c.totalPrice, 0)}</span>
                    </a>
                </div>);
        }
        else {
            return (<a className="dropdown-item" href="/">No booking is available</a>)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" >
                            Shopping cart  <span className="badge badge-danger">{items.length}</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            {items.map(_ =>
                                <a className="dropdown-item" key={_.id} onClick={(e) => handleItemClick(e, _.id)} href="/">{_.name}</a>
                            )}

                            {calculateSum()}

                        </div>
                    </li>
                </ul>
            </div>
        </nav>);
};


export default Navbar;