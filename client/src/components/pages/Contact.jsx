import { React, Fragment } from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {

    return (
      <Fragment>
        <div className="contact-content">
        <div className="studio-text"> CONTACT</div>
        <div className="paragraph-text"> I would love to chat with you! To get in touch, please email me at hello@studio-isabel.com 
        <div className="contact-socials" style={{marginTop: "10px"}}>
        <SocialIcon className="soc-icon" target="_blank" url= "https://www.linkedin.com/in/isabel-donnelly-26b16a21a/" />
        </div>
        </div>
        </div>
      </Fragment>
    );
  }
  
  export default Contact;