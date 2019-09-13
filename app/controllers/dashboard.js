import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort, sum } from '@ember/object/computed';

export default Controller.extend({

  sortProperty: 'firstName',

  customersSortProps: computed('sortProperty', function () {
    return [this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps'),

  budgetSum: sum('model@each.budget'),

  sortingKey: ['date'],

  sortedModel: Ember.computed.sort('model', 'sortingKey'),

  totalBudgetSum: Ember.computed('model,@each.budget', function () {
    let sum = 0;
    this.get('model').forEach(customer => {
      sum += parseInt(customer.get('budget'));
    });
    return sum;
  })
});
