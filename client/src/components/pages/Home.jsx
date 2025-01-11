import { React, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container} from 'react-bootstrap';
import weather from '../../images/weather-app.png'
import irk from '../../images/irk3.png'
import gh1 from '../../images/gh1.png'
import podsite from '../../images/podsite.png'
import zodiac from '../../images/myzodiac.jpg'
import mysite from '../../images/studioisabelhome.jpg'


function Home() {

  return (
    <Fragment>
      <div className="HomePage">
        <div className="studio-text">
            Isabel's Folio
        </div>
        <div className="paragraph-text" colSpan="5"> Hi! My names Isabel/Izzy and I'm a Front-End Web Developer<br></br> and Graphic Designer based in Melbourne Australia. <br></br>
      Welcome to my portfolio, please take a look below for examples of some of my student and freelance work. You can also check out my <a href="https://codepen.io/isabel-donnelly/" target='_blank'>codepen</a> for examples of the type of work I do in my current role as an E-learning Producer. Feel free to <Link to="contact"><u>contact me</u></Link> if you have any further enquiries.
      </div>
  </div>

          <Container>
        <Row>
             <Col sm={12} md={6}>
                <div className="work-card">
                    <img className="work-image" src={irk} alt="my project"/>  
                        <h3>IRK Magazine</h3>
                         <p>
                            Magazine cover and editorial design/concept by me. I completed this project when I was a student at Shillington College. The brief was to create an "unconventional travel" issue, so for the cover I cut up and 
                            scanned in images I had taken in places like Poland and Slovenia. To create this I used Indesign, Illustrator and Photoshop.</p>                  
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
                <div className= "work-card">
                    <img className="work-image" src={weather} alt="my project"/>  
                        <h3>The weather</h3>
                            <p>This is another React.js project. I built it recently in 2024, as I have always been interested in learning Tailwind.css. You may use it to look up the weather in your city!</p>
                                <div className="card-buttons">
                                    <a href="https://github.com/izzy2541/react-weather-24" target="_blank">
                                    <Button className="btn" variant="outline-dark" >Source Code</Button>
                                    </a>
                                    <a href="https://react-weather-24-git-main-izzy2541s-projects.vercel.app/" target="_blank">
                                  <Button  className="btn"  variant="outline-dark"> Live Site</Button>  
                              </a> 
                                
                                </div>
                </div>
            </Col>
                  <Col sm={12} md={6}>
                  <div className="work-card" >
                    <img className="work-image" variant="top" src={mysite} alt="my project"/>  
                        <h3>Studio Isabel</h3>
                         <p> I built my folio website from scratch using React, SASS and Bootstrap. Originally built in 2022, I have been working on a couple of updates this year and aim to add a few more projects soon, so stay tuned. </p>    

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
  
  );
}

export default Home;
