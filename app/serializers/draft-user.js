import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  typeForRoot: function(prop) {
    if (prop === 'user') {
      return 'draft-user';
    }
    return this._super.apply(this, arguments);
  },
  serializeIntoHash: function(hash, type, record, options) {
    hash['user'] = this.serialize(record, options);
  }
});
