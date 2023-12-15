import {
  defineNamespace,
  defineProjections,
  Model as ЗаправБакMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаправБакMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
