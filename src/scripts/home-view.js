const React = require('react');

const HomeView = React.createClass({

  render: function(){

    return(
      <div>
        <nav>
          <div className="navLogo"></div>
          <div className="navButts"></div>
        </nav>
        <div className="jumboHeader">
          <img src="../images/pexels-photo-27031.jpg"/>
        </div>
        <div className="skillsBox"></div>
        <div className="projectBox"></div>
        <div className="aboutMeBox"></div>
        <div className="contactBox"></div>
        <div className="quoteBox"></div>
      </div>
    )

  }
})

module.exports = HomeView
