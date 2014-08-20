App.UsersView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.template = _.template($('#template-users').html());
    var usersRawHtml = this.template({users: App.users.toJSON()});
    $(this.el).html(usersRawHtml);
  }
});
