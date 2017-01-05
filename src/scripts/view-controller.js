const React = require('react')
const HomeView = require('./home-view.js')

const AppView = React.createClass({

  //  getInitialState: function(){
   //
   //
  //     return STORE.getStoreData()
  //  },
   //
  //  componentWillMount: function(){
  //     let self = this
   //
  //     STORE.onChange(function(){
   //
   //
  //        self.setState(STORE.getStoreData())
  //        console.log('app state changed')
  //     })
  //  },

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
