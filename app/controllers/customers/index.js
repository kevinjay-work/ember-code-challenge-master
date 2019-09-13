import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({

  sortProperty: 'firstName',
  sortProperty: 'budget',
  titleFilter: null,
  searchData: null,

  myValueDidChange: function (e) {
    const search = e.myValue
    let searchedData = this.get('model').filter((customer) => {
      debugger
      return customer.firstName.toLowerCase().includes(search) || customer.lastName.toLowerCase().includes(search) || customer.company.toLowerCase().includes(search) || customer.project.toLowerCase().includes(search)
    })
    if (!search) {
      this.set('searchData', null)
    }
    else {
      this.set('searchData', searchedData)
    }
  }.observes('myValue'),

  customersSortProps: computed('sortProperty', function () {
    return [this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps'),

});
