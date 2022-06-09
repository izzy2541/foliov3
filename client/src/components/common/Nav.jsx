import React from 'react';
import { Link } from 'react-router-dom';

import { BsEmojiSmile } from 'react-icons/bs';

function Navbar() {

    return (
        <div className="navbar">
                <Link className="navbar-link-logo" to="/"><BsEmojiSmile/></Link>
                <div className="navbar-linklist">
                < Link to="/work" className="navbar-linky" >Work</Link>
                < Link to="/contact" className="navbar-linky">Contact</Link>
                </div>
      </div>

    );
}

export default Navbar;

