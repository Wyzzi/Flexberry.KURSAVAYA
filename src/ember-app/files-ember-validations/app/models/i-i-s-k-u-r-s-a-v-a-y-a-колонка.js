import {
  defineNamespace,
  defineProjections,
  Model as КолонкаMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-колонка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КолонкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
