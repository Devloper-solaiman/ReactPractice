import React from 'react';
import './Menubar.css'

const Menubar = ({ count }) => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="menuLogo col-md-2 p-2 ">L<small className='o'>o</small>go</div>
                    <div className="menu-container col-md-10 d-flex justify-content-end">
                        <li className='p-2 ms-4'>Home</li>
                        <li className='p-2 ms-4'>Contact</li>
                        <li className='p-2 ms-4'>cart <sup className='red'>{count}</sup> </li>
                        <li className='p-2 ms-4'>login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;