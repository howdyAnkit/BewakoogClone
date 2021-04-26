import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center flex-column'>
      <div className='d-flex align-items-center justify-content-center flex-column p-5 m-5'>
        <h1>404</h1>
        <h3>OH SNAP !</h3>
        <h4>The page you're looking for does not exist</h4>
        <h6>You can visit one of the following links</h6>
        <ul>
          <li>
            <Link to='/women-clothing'>Women's Clothing</Link>
          </li>
          <li>
            <Link to='/men-clothing'>Men's Clothing</Link>
          </li>
          <li>
            <Link to='/top-wear'>Top Wear</Link>
          </li>
          <li>
            <Link to='/bottom-wear'>Bottom Wear</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageNotFound;