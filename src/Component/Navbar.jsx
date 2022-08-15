import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='header'>
    <ul>
            <li>
             <Link className='navLink' to="/Home">Home</Link></li>

             <li>
      <Link className='navLink' to="/Student">Student</Link>
      </li>

      <li>
      <Link className='navLink' to="/Contact">Contact</Link>
      </li>
</ul>
    </div>
  );
}

export default Navbar