var UsersView = Backbone.View.extend({
  initialize: function(){
    this.loadUsers();
  },

  loadUsers: function(){
    this.users = new Users();
    this.users.fetch();

    debugger
    template = _.template(this.template, this.users.toJSON());
    this.$el.html(template);
  },

  template: "<% _.each(this.users, function(user) { %><tr><td><%= user.name %></td><td><%= user.email %></td></tr><%= name %><% }); %>"
});
