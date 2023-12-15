import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТоварMixin
} from '../mixins/regenerated/models/i-i-s-k-u-r-s-a-v-a-y-a-товар';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТоварMixin, Validations, {
});

defineProjections(Model);

export default Model;
