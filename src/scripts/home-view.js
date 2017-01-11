const React = require('react');

const HomeView = React.createClass({
  getInitialState: function(){
    return {
      scrollPosition: false
    }
  },

  componentDidMount: function(){
    window.addEventListener("scroll", isScrolling)
  },
  isScrolling: function(){
    let self = this
    if(window.scrollTop === 300){

    }
  },

  render: function(){
    var picName = "headerProfPicCentered"


    // let runThing = function(){
    //   console.log(document.body.scrollTop)
    // }


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

// var scrollListening = function(){
//   console.log("scrolling")
//   if(window.scrollTop > 200){
//     picName = "headerProfPic"
//   }
// }


module.exports = HomeView
