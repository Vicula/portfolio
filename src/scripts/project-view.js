const React = require('react');


const ProjectView = React.createClass({


  render: function(){


    return(


      <div className="projectBox">
          <h1>PROJECTS</h1>
          <p>These are a few of my projects that i am currently working on or have already completed. Each project uses different Javascript libraries and other frameworks that i use. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <div className="outterProjectBox">
              <div className="innerProjectBox box1">

              </div>
              <div className="innerProjectBox box2"></div>
            </div>
            <div className="outterProjectBox">
              <div className="innerProjectBox box3"></div>
              <div className="innerProjectBox box4"></div>
            </div>
          </div>
          <div>See More ></div>
      </div>


    )

  }
})



module.exports = ProjectView
