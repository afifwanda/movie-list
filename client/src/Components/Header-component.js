import React from 'react';
import '../Styles/home.style.css'
import {Link} from 'react-router-dom';


function Header(){  

  return(
    <Link to={`/`}>
      <div className="upper-body">
          <h1>Movie </h1>
          <h1 className='database'>Database</h1>
      </div>        
    </Link>
  )
}

export default Header