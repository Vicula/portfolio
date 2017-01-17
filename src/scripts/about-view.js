const React = require('react');

const AboutView = React.createClass({


  render: function(){


    return(

      <div className="aboutMeBox">
          <h1>ABOUT ME</h1>
          <p>These are a few of my projects that i am currently working on or have already completed. Each project uses different Javascript libraries and other frameworks that i use. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="aboutPicBox">
            <div className="aboutPic aBox1">
              <h1>Dedicated</h1>
            </div>
            <div className="aboutPic aBox2">
              <h1>HardWorking</h1>
            </div>
            <div className="aboutPic aBox3">
              <h1>Creative</h1>
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    )

  }
})



module.exports = AboutView
