import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Menu =()=> {
   

        return (
            <>
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                        <li >
                            <Link to={'/'}>Home </Link>
                        </li>
                        <li>
                            <Link to={'/about'}  >About Us</Link>
                        </li>
                        <li>
                            <Link  to={'/Services'}>Services</Link>
                        </li>
                        <li><Link  to={'/contact'}>Contact</Link></li>
                        
                    </ul>
                </div>

            </>
        )

}
export default Menu;