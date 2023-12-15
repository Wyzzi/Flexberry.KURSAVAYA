import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКол: DS.attr('number'),
  заправБак: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак', { inverse: null, async: false })
});

export let ValidationRules = {
  номерКол: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-колонка.validations.номерКол.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  заправБак: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-колонка.validations.заправБак.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КолонкаE', 'i-i-s-k-u-r-s-a-v-a-y-a-колонка', {
    номерКол: attr('Номер кол', { index: 0 }),
    заправБак: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак', 'Заправ бак', {
      типТоплива: attr('Тип топлива', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'типТоплива' })
  });

  modelClass.defineProjection('КолонкаL', 'i-i-s-k-u-r-s-a-v-a-y-a-колонка', {
    номерКол: attr('Номер кол', { index: 0 }),
    заправБак: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак', 'Тип топлива', {
      типТоплива: attr('Тип топлива', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
