var Router = Backbone.Router.extend({

  routes: {
    "users/new": "newUser",
    "users"    : "users"
  },

  initialize:function(){
  },

  newUser: function(){
    var user_view = new UserView({ el: $('#user-form')  });
  },

  users: function(){
    var users_view = new UsersView({ el: $('#user-table')  });
  }

});

$(function(){
  var router = new Router();
  Backbone.history.start({pushState: true});
});
