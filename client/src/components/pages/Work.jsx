import {Fragment, React}  from 'react';
import { Link }from 'react-router-dom';
import { Row, Col, Button, Container} from 'react-bootstrap';
import weather from '../../images/weather.jpg'
import irk from '../../images/irk3.png'
import gh1 from '../../images/gh1.png'
import podsite from '../../images/podsite.png'
import zodiac from '../../images/myzodiac.jpg'
import mysite from '../../images/studioisabelhome.jpg'

function Work() {

    return (
      <Fragment>
          <Container>
        <Row>
             <Col sm={12} md={6}>
                <div className="work-card">
                    <img className="work-image" src={irk} alt="my project"/>  
                        <h3>IRK Magazine</h3>
                         <p>
                            Magazine cover and editorial design/concept by me while at Shillington Design College. The brief here was to create an "unconventional travel" issue, so for the cover I cut up and 
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
                         <p>A website used to search and listen to Podcasts. This is a React project and  my first project using SASS!</p>
                  
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
                  <Col>
                        <div className="work-card">
                            <img className="work-image" src={weather} variant="top" alt="my project" />
                            <h3>The Weather!</h3>
                            <p>This site is a 2024 build, again using React.js. It is not student work but a recent project I 
                                decided to take on as I have always been interested in learning Tailwind.css.
                                You may use it to look up the weather forecast in your city.
                            </p>

                            <div className="card-buttons">
                                <a href="https://github.com/izzy2541/react-weather-24" target="_blank">
                                    <Button className="btn" variant="outline-dark" >Source Code</Button>
                                </a>
                                <a href="https://react-weather-24-git-main-izzy2541s-projects.vercel.app/" target="_blank">
                                    <Button className="btn" variant="outline-dark">Live Site</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                  <Col>
                  <div className= "work-card">
                    <img className="work-image" src={zodiac} variant="top" alt="my project"/>  
                        <h3>Astrology.Com</h3>
                         <p>A website where a user can find out what zodiac they are based on their date of birth and also find out more information about said zodiac sign. This was my first Next.js project! I also used SASS.

                         </p>
                  
                        <div className="card-buttons">
                            <a href="https://github.com/izzy2541/astrologyv4" target="_blank">
                                <Button className="btn" variant="outline-dark" >Source Code</Button>
                            </a>
                            <a href="https://myzodiac.vercel.app/" target="_blank">
                                <Button  className="btn"  variant="outline-dark"> Live Site</Button>  
                            </a> 
                        </div>  
                </div> 
                  </Col>
         
                  <Col sm={12} md={6}>
                  <div className="work-card" >
                    <img className="work-image" variant="top" src={mysite} alt="my project"/>  
                        <h3>Studio Isabel</h3>
                         <p> I built my folio website from scratch using React, SASS and Bootstrap. I have been working on some new pojects this year and plan on adding them to the site soon, so stay tuned.</p>    

                        <div className="card-buttons">
                        <a href="https://github.com/izzy2541/foliov3" target="_blank">
                                <Button className="btn" variant="outline-dark" >Source Code</Button>
                            </a>
                            <a href="https://isabel-donnelly.com/" target="_blank">
                                <Button  className="btn"  variant="outline-dark"> Live Site</Button>  
                            </a> 
                        </div> 
                  </div>               
                  </Col>
              </Row>
              </Container>
      </Fragment>
    );}
  
  export default Work;