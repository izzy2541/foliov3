import { React, Fragment } from 'react';
import {Link} from 'react-router-dom'

function NotFound() {

    return (
      <Fragment>
        <div className="contact-content">
        <div className="studio-text"> ERROR 404</div>
        <div className="paragraph-text"> So sorry! You're Lost! <Link to="/"><u>Return home.</u></Link></div>
        </div>
      </Fragment>
    );
  }
  

  export default NotFound;


