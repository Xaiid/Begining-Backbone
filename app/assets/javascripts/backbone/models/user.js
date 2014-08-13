App.User = Backbone.Model.extend({
  defaults:{
    name:  "",
    email: ""
  },

  url: "/users",
});
