App.Router = Backbone.Router.extend({

  routes: {
    "users/new": "newUser",
    ""         : "users"
  },

  initialize:function(){
  },

  newUser: function(){
    var user_view = new UserView({ el: $('#user-form')  });
  },

  users: function(){
    var users_view = new App.UsersView({
      el: $('#fn-users-table')
    });
  }

});

$(function(){
  App.router = new App.Router();
  Backbone.history.start({pushState: true});
});
