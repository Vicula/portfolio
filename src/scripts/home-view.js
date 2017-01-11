const React = require('react');

const HomeView = React.createClass({

  render: function(){

    return(
      <div>
        <nav>
          <div className="navLogo">
            <img className="headerProfPicCentered" src="../images/Victor 1_Fotor.jpg"/>
          </div>
          <div className="navButts"></div>
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
          <h1></h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="aboutMeBox"></div>
        <div className="contactBox"></div>
        <div className="quoteBox"></div>
      </div>
    )

  }
})

module.exports = HomeView
