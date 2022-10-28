import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Dropdown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='transperent' id="dropdown-basic" style={{fontSize:"20px", fontWeight:"600"}}>
       Services
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item ><Link className='text-dark' to={'proservices/visa'}> License</Link></Dropdown.Item>
        <Dropdown.Item > <Link className='text-dark' to={'proservices/visa'}> Visa</Link></Dropdown.Item>
        <Dropdown.Item ><Link className='text-dark' to={'proservices/visa'}>Finance & Banking </Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;