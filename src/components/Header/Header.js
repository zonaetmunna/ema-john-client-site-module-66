import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>

                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">OrderReview</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                {user.email && <span style={{ color: 'white' }}>hellow {user.displayName}</span>}
                {
                    user.email ?
                        <button onClick={logOut}>logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                }


            </nav>
        </div>
    );
};

export default Header;