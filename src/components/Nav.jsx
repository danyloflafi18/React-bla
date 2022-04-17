import React from 'react';
import Patient from './Patient';

const Nav = () => {
    return (
        <div className='nav'>
            <Patient patient="Alex" />
            <Patient patient="John" />
            <Patient patient="Danylo" />
            <Patient patient="Login" />
        </div>
    );
}

export default Nav;