import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  наименование: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-товар.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-k-u-r-s-a-v-a-y-a-товар', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    количество: attr('Количество', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-k-u-r-s-a-v-a-y-a-товар', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    количество: attr('Количество', { index: 2 })
  });
};
