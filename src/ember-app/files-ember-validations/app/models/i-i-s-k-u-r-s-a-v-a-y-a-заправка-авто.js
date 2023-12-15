import {
  defineNamespace,
  defineProjections,
  Model as ЗаправкаАвтоMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаправкаАвтоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
