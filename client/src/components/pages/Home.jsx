import { React, Fragment } from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <Fragment>
      <div className="HomePage">
        <div className="studio-text">
            STUDIO
            ISABEL
        </div>
        <div className="paragraph-text" colSpan="5"> Hi! My names Isabel and I'm a Front-End Web Developer<br></br> and Graphic Designer based in Melbourne Australia. <br></br>
      Welcome to my portfolio, please <Link to="work"><u>have a look</u></Link> and contact me for further enquires.

      </div>
  </div>
  </Fragment>
  
  );
}

export default Home;