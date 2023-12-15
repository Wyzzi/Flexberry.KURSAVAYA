import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  активен: DS.attr('boolean'),
  объем: DS.attr('number'),
  типТоплива: DS.attr('string'),
  уровеньЗаливки: DS.attr('number'),
  ценаТопл: DS.attr('decimal')
});

export let ValidationRules = {
  активен: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак.validations.активен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  типТоплива: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак.validations.типТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  уровеньЗаливки: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак.validations.уровеньЗаливки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  ценаТопл: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак.validations.ценаТопл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаправБакE', 'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак', {
    объем: attr('Объем', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 }),
    уровеньЗаливки: attr('Уровень заливки', { index: 2 }),
    активен: attr('Активен', { index: 3 }),
    ценаТопл: attr('Цена топл', { index: 4 })
  });

  modelClass.defineProjection('ЗаправБакL', 'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак', {
    объем: attr('Объем', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 }),
    уровеньЗаливки: attr('Уровень заливки', { index: 2 }),
    активен: attr('Активен', { index: 3 }),
    ценаТопл: attr('Цена топл', { index: 4 })
  });
};
