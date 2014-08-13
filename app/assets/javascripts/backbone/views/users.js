App.UsersView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template($("#template-users").html()),

  render: function() {
    var usersRawHtml = this.template(App.users);
    this.el.html(usersRawHtml);
  }
});
