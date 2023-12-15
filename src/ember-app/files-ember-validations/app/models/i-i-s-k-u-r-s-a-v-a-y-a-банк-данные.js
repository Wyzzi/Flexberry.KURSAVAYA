import {
  defineNamespace,
  defineProjections,
  Model as БанкДанныеMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-банк-данные';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БанкДанныеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
