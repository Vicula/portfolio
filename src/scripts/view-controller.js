const React = require('react')
const HomeView = require('./home-view.js')

const AppView = React.createClass({


   render: function(){

      switch (this.props.view) {
         case "home":
            return <HomeView/>
            break;
         default:

            break;
      }

   }


})


module.exports = {AppView}
