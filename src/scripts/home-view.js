const React = require('react');

const HomeView = React.createClass({
  getInitialState: function(){
    return {
      
    }
  },

  componentDidMount: function(){

  },

  render: function(){
    var picName = "headerProfPicCentered"


    let runThing = function(){
      console.log(document.body.scrollTop)
    }


    return(
      <div>
        <nav>
          <div className="navLogo">
            <img className={picName} src="../images/Victor 1_Fotor.jpg"/>
          </div>
          <div className="navButts">
            <span onClick={runThing} className="fa fa-github" aria-hidden="true"></span>
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

// when(document.body.scrollTop === 200){
//   picName = "tickle"
// }
