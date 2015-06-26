import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var user = this.modelFor('users.user');
    var store = this.store;
    return store.push('draft-user', {
      id: user.get('id'),
      firstName: user.get('firstName'),
      lastName: user.get('lastName')
    });
  },
  resetController: function() {
    this.currentModel.unloadRecord();
  },
  actions: {
    save: function () {
      var draftUser = this.currentModel;
      draftUser.save().then(function () {
        draftUser.store.push('user', {
          id: draftUser.get('id'),
          firstName: draftUser.get('firstName'),
          lastName: draftUser.get('lastName')
        });
      });
    },
    cancel: function () {
      this.transitionTo('users.user');
    }
  }
});
