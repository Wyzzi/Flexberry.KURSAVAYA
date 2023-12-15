import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЧекMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-чек';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЧекMixin, Validations, {
});

defineProjections(Model);

export default Model;
