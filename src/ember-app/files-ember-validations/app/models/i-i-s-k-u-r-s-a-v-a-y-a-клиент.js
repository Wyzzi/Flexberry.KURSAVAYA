import {
  defineNamespace,
  defineProjections,
  Model as КлиентMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлиентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
