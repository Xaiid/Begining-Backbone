App.UsersView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click .delete-btn': 'delete'
  },

  render: function() {
    this.template = _.template($('#template-users').html());
    var usersRawHtml = this.template({users: App.users.toJSON()});
    $(this.el).html(usersRawHtml);
  },

  delete: function (event) {
    var user  = App.users.where({id:$(event.currentTarget).data().userId})[0]
    user.destroy({success: _.bind(function(e){
      this.render();
    }, this)});
  },

});
