const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppRouter = Backbone.Router.extend({
  routes: {
    '': "showHome"
  },
  showHome: function(){
    ReactDOM.render
  },
  initialize: function(){

      Backbone.history.start()
   }
})

new AppRouter()
