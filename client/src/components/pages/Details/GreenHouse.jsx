import {Fragment, React}  from 'react';
import { Container } from 'react-bootstrap';

import gh2 from '../../../images/green1.jpg'
import gh3 from '../../../images/green2.jpg'
import gh4 from '../../../images/green3.jpg'
function GreenHouse() {

    return (
        <Fragment>
            <Container>
                <div className="image-box">
                    <img className="details" src={gh2} alt="my project"/> 
                    <img className="details" src={gh3} alt="my project"/>
                    <img className="details" src={gh4} alt="my project"/>

                 </div>
            </Container>
        </Fragment>
    );}
  
  export default GreenHouse;