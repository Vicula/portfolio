const React = require('react');



const HeaderView = React.createClass({


  render: function(){


    return(
      <div className="jumboHeader">
          <img className="headerBackPic" src="../images/photo-1432821596592-e2c18b78144f.jpeg"/>

          <h1 className="headerText">Front-End Developer <span className="headerLowerText">Working for you</span></h1>
      </div>

    )

  }
})



module.exports = HeaderView
