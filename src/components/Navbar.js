import React, {useCallback} from "react";

const Navbar = ({items}) => {
    items=items|| [];
    
    const handleItemClick=(e, id)=>{
        e.preventDefault();
        return false;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/"  role="button" data-toggle="dropdown" >
                            Dropdown link  <span className="badge badge-danger">{items.length}</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        
                            {items.map(_=>
                                <a className="dropdown-item" key={_.id} onClick={(e)=>handleItemClick(e, _.id)} href="/">{_.name}</a>
                                )}
                                <hr/>
                                <a className="dropdown-item" href="/">cost {items.reduce((p,c)=> p+c.totalPrice, 0)}</a>
                                
                        </div>
                    </li>
                </ul>
            </div>
        </nav>);
};


export default Navbar;