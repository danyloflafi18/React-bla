import React from 'react';
import {NavLink} from 'react-router-dom';

const Patient = (props) => {
    return (
        <div className='patient'>
            <NavLink to={props.patient}>{props.patient}</NavLink>
            </div>
    );
}

export default Patient;