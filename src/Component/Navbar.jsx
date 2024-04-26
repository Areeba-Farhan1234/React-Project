import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
       <nav>
          <ul>
            <li>
              <Link to={`about`}>About</Link>
            </li>
            <li>
              <Link to={`ProductS`}>Products</Link>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default Navbar;
