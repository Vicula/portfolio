const React = require('react');

const HomeView = React.createClass({
  getInitialState: function(){
    return {
      scrollPosition: false
    }
  },
  isScrolling: function(){
    var self = this
    console.log(this.state.scrollPosition)
    if(document.body.scrollTop > 350){
      self.setState({scrollPosition: true})
      console.log("hey1")
      return
    }else if(document.body.scrollTop < 350){
      self.setState({scrollPosition: false})

    }
    // if(){
    //   if(window.scrollTop < 300){
    //     self.setState({scrollPosition: false})
    //     console.log("hey2")
    //   }
    // }
  },

  componentDidMount: function(){
    window.addEventListener("scroll", this.isScrolling)
  },


  render: function(){

    var picName = "logoCentered"

    if(this.state.scrollPosition === false){
      picName = "logoCentered"
    } else {
      picName = "logoTop"
    }



    let runThing = function(){
      console.log(document.body.scrollTop)
    }

    // <div className="picHolder">
    //   <img className={picName} src="../images/Victor 1_Fotor.jpg"/>
    // </div>


    return(
      <div>
        <nav>
          <div className="navLogo">
            <span className="fa fa-code logoCentered" aria-hidden="true"></span>
          </div>
          <div className="navLinks">
            <p className=""><span className="navLkHome">Home</span><span className="navLkSkills">Skills</span><span className="navLkProjects">Projects</span><span className="navLkAbout">About</span><span className="navLkContact">Contact</span></p>
          </div>
          <div className="navButts">
            <span onClick={runThing} className="fa fa-github" aria-hidden="true"></span>
            <span className="fa fa-linkedin-square" aria-hidden="true"></span>
            <span className="fa fa-envelope" aria-hidden="true"></span>
          </div>
          <div className="botNavButts">
            <span className="fa fa-bullhorn" aria-hidden="true"></span>
          </div>
        </nav>
        <div className="jumboHeader">
          <img className="headerBackPic" src="../images/photo-1432821596592-e2c18b78144f.jpeg"/>
          <h1 className="headerText">Front-End Developer <span className="headerLowerText">Working for you</span></h1>
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
