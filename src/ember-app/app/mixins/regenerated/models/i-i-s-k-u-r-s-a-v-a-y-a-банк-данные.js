import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  cVV: DS.attr('number'),
  датаОконч: DS.attr('date'),
  номерКарт: DS.attr('number')
});

export let ValidationRules = {
  cVV: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-банк-данные.validations.cVV.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-банк-данные.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  номерКарт: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-банк-данные.validations.номерКарт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БанкДанныеE', 'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные', {
    номерКарт: attr('Номер карт', { index: 0 }),
    cVV: attr('CVV', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 })
  });

  modelClass.defineProjection('БанкДанныеL', 'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные', {
    номерКарт: attr('Номер карт', { index: 0 }),
    cVV: attr('CVV', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 })
  });
};
