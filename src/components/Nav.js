import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/favorites'>
                    <li>Coups de coeur</li>
                </NavLink>
            </ul>
           
            
        </div>
    );
};

export default Nav;