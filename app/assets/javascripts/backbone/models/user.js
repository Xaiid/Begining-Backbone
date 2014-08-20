App.User = Backbone.Model.extend({
  defaults:{
    name:  "",
    email: ""
  },

  idAttribute: "id",

  url: function() {
    if (this.id) {
      return "/users/" + this.id;
    } else {
      return "/users/";
    }
  }
});
