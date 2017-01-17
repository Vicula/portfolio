const React = require('react');

const NavView = React.createClass({
  getInitialState: function(){
    return {
      scrollPosition: false
    }
  },
  isScrolling: function(){
    var self = this
    // console.log(this.state.scrollPosition)
    if(document.body.scrollTop > 575){
      self.setState({scrollPosition: true})
      // console.log("hey1")
      return
    }else if(document.body.scrollTop < 575){
      self.setState({scrollPosition: false})

    }

  },

  componentDidMount: function(){
    window.addEventListener("scroll", this.isScrolling)
  },


  render: function(){

    var picName = ""

    if(this.state.scrollPosition === false){
      picName = ""
    } else {
      picName = "altNav"
    }



    return(
        <nav className={picName}>
          <div className="navLogo">
            <span className="fa fa-code logoCentered" aria-hidden="true"></span>
          </div>
          <div className="navLinks">
            <p className=""><span className="navLkHome">Home</span><span className="navLkSkills">Skills</span><span className="navLkProjects">Projects</span><span className="navLkAbout">About</span><span className="navLkContact">Contact</span></p>
          </div>
          <div className="navButts">
            <span className="fa fa-github" aria-hidden="true"></span>
            <span className="fa fa-linkedin-square" aria-hidden="true"></span>
            <span className="fa fa-envelope" aria-hidden="true"></span>
          </div>
          <div className="botNavButts">
            <span className="fa fa-bullhorn" aria-hidden="true"></span>
          </div>
        </nav>
    )

  }
})



module.exports = NavView
