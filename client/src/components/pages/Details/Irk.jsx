import {Fragment, React}  from 'react';
import { Container } from 'react-bootstrap';

import irk1 from '../../../images/irk1.jpeg'
import irk2 from '../../../images/irk2.jpeg'
import irk6 from '../../../images/irk3.png'
import irk4 from '../../../images/irk4.jpeg'
import irk5 from '../../../images/irk5.jpeg'

function Irk() {

    return (
        <Fragment>
            <Container>
                <div className="image-box">
                    <img className="details" src={irk6} alt="my project"/> 
                    <img className="details" src={irk1} alt="my project"/>
                    <img className="details" src={irk2} alt="my project"/>
                    <img className="details" src={irk4} alt="my project"/>
                    <img className="details" src={irk5} alt="my project"/>
                 </div>
            </Container>
        </Fragment>
    );}
  
  export default Irk;