import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    return this.store.findAll('customer', { reload: true }).then(results => results.sortBy('budget').reverse().slice(0, 5));
  }
});