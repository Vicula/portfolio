const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const {AppView} = require('./view-controller.js');

const AppRouter = Backbone.Router.extend({
  routes: {
    '': "showHome"
  },
  showHome: function(){
    ReactDOM.render(<AppView view="home"/>, document.querySelector("#app-container"))
  },
  initialize: function(){

      Backbone.history.start()
   }
})

new AppRouter()
