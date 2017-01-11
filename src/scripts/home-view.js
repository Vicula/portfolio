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

    var picName = "headerProfPic"

    if(this.state.scrollPosition === false){
      picName = "headerProfPicCentered"
    } else {
      picName = "headerProfPic"
    }



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
          <h1>I am <span className="headerName">Victor Carpenter</span> I specialize in <span className="headerFeats">Web Development</span> and <span className="headerFeats">Front-End Engineering</span></h1>
          <h2>I also Create custom designs for websites, interfaces, and webapps based on your specifications & requirements. I'm experienced in print and identity design.</h2>
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
