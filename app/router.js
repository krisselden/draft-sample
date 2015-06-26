import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('users', function () {
    this.route('user', { path: '/:user_id'}, function () {
      this.route('edit');
    });
  });
});
