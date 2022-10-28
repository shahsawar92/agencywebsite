import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/Services'}>Services</Link>
                        </li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;