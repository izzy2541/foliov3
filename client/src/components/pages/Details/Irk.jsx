import {Fragment, React}  from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

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
                    <img className="details" src={irk6} alt="project image"/> 
                    <img className="details" src={irk1} alt="project image"/>
                    <img className="details" src={irk2} alt="project image"/>
                    <img className="details" src={irk4} alt="project image"/>
                    <img className="details" src={irk5} alt="project image"/>
                 </div>
            </Container>
        </Fragment>
    );}
  
  export default Irk;