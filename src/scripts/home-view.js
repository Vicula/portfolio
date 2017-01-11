const React = require('react');

const HomeView = React.createClass({

  render: function(){

    return(
      <div>
        <nav>
          <div className="navLogo">
            <img className="headerProfPicCentered" src="../images/Victor 1_Fotor.jpg"/>
          </div>
          <div className="navButts">
            <span className="fa fa-github" aria-hidden="true"></span>
            <span className="fa fa-linkedin-square" aria-hidden="true"></span>
            <span className="fa fa-envelope" aria-hidden="true"></span>
          </div>
        </nav>
        <div className="jumboHeader">
          <img className="headerBackPic" src="../images/pexels-photo-27031.jpg"/>
          <h1>Turning Your Ideas Into Reality</h1>
          <h2>____ Today ____</h2>
        </div>
        <div className="skillsBox">
          <div></div>
        </div>
        <div className="projectBox">
          <h1>Projects</h1>
          <p></p>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="aboutMeBox">
          <h1>Approach</h1>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="contactBox">
          <h1>Contact</h1>
          <div>

          </div>
        </div>
        <div className="quoteBox"></div>
        <div className="footerBox"></div>
      </div>
    )

  }
})

module.exports = HomeView
