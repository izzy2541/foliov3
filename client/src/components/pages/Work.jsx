import {Fragment, React}  from 'react';
import { Link }from 'react-router-dom';
import { Row, Col, Button, Container} from 'react-bootstrap';
import mybookshelf from '../../images/bookshelfmockupp.png'
import irk from '../../images/irk3.png'
import gh1 from '../../images/gh1.png'
import podsite from '../../images/podsite.png'






function Work() {

    return (
      <Fragment>
          <Container>
        <Row>
            <Col sm={12} md={6}>   
                <div className= "work-card">
                    <img className="work-image" src={mybookshelf} alt="my project"/>  
                        <h3>My Bookshelf</h3>
                            <p>I built the My Bookshelf app using React and styled it using Bootstrap and styled components. Here users can login, and create a virtual display of the books they have been reading.</p>
                                <div className="card-buttons">
                                    <Button variant="outline-dark">Source Code</Button>
                                    <Button variant="outline-dark">Live Site</Button>
                                </div>
                </div>
            </Col>
             <Col sm={12} md={6}>
                <div className="work-card">
                    <img className="work-image" src={irk} alt="my project"/>  
                        <h3>IRK Magazine</h3>
                         <p>
                            Magazine cover and editorial design/concept by me. The brief here was to create an "unconventional travel" issue, so for the cover I cut up and 
                            scanned in images I had taken in places like Poland and Slovenia. To create this I used Indesign, Illustrator and Photoshop</p>                  
                         <div className="card-buttons">
                             <Link to="/work/irk">
                                <Button variant="outline-dark">View Project</Button>
                            </Link>
                        </div>
                        </div>
                  </Col>
        {/* </Row> */}
         {/* <Row> */}
            <Col sm={12} md={6}>   
                <div className= "work-card">
                    <img className="work-image" src={podsite} variant="top" alt="my project"/>  
                        <h3>POD.COM</h3>
                         <p>A website used to search and listen to Podcasts. This is a react project and  my first project using SASS!</p>
                  
                        <div className="card-buttons">
                            <a href="https://github.com/izzy2541/PODCASTSITEv2" target="_blank">
                                <Button className="btn" variant="outline-dark" >Source Code</Button>
                            </a>
                            <a href="https://podcom.netlify.app/" target="_blank">
                                <Button  className="btn"  variant="outline-dark"> Live Site</Button>  
                            </a> 
                        </div>  
                </div> 
                  </Col>
                  <Col sm={12} md={6}>
                  <div className="work-card" >
                    <img className="work-image" variant="top" src={gh1} alt="my project"/>  
                        <h3>Green House</h3>
                         <p> The Green House is a convention centre based in Barcelona committed to sustainability. The organic shapes used in the design were inspired by the natural world. This was a way of paying homage to Antoni Gaudi who too took inspiration from nature in everything he did</p>    
                        <div className="card-buttons">
                            <Link to="/work/greenhouse">
                                <Button variant="outline-dark"> View Project</Button>
                            </Link>
                        </div> 
                  </div>               
                  </Col>
              </Row>
              </Container>
      </Fragment>
    );}
  
  export default Work;