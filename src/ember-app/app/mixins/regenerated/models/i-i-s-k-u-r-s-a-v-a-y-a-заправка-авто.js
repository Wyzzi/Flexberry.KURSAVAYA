import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колТоплива: DS.attr('number'),
  колонка: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-колонка', { inverse: null, async: false })
});

export let ValidationRules = {
  колТоплива: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто.validations.колТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  колонка: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто.validations.колонка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаправкаАвтоE', 'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто', {
    колТоплива: attr('Кол топлива', { index: 0 }),
    колонка: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-колонка', 'Колонка', {
      номерКол: attr('Номер кол', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерКол' })
  });

  modelClass.defineProjection('ЗаправкаАвтоL', 'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто', {
    колТоплива: attr('Кол топлива', { index: 0 }),
    колонка: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-колонка', 'Номер кол', {
      номерКол: attr('Номер кол', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
