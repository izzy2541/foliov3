import {Fragment, React}  from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

import gh2 from '../../../images/green1.png'
import gh3 from '../../../images/gh2.jpeg'
import gh4 from '../../../images/green3.png'

function GreenHouse() {

    return (
        <Fragment>
            <Container>
                <div className="image-box">
                    <img className="details" src={gh2} alt="project image"/> 
                    <img className="details" src={gh3} alt="project image"/>
                    <img className="details" src={gh4} alt="project image"/>

                 </div>
            </Container>
        </Fragment>
    );}
  
  export default GreenHouse;