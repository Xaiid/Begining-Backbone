var UserView = Backbone.View.extend({

  events: {
    'click #new-user': 'createUser'
  },

  createUser: function(){
    var user = new User({
      name:  $('#name').val(),
      email: $('#email').val()
    });

    user.save({}, {
      success: function(user){
        console.log(user.toJSON());
      }
    });
  }
});
