import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <NavLink to='/' end className={(nav) => (nav.isActive ? "nav-active" : '')}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to='/favorites' end className={(nav) => (nav.isActive ? "nav-active" : '')}>
                        <li>Coups de coeur</li>
                    </NavLink>
                </ul>
            </nav>
            <h1>React Movies</h1>
           
            
        </div>
    );
};

export default Nav;