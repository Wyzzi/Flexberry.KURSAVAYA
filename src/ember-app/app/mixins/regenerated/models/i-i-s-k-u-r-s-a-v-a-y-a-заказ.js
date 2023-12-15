import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЗаказа: DS.attr('number'),
  заправкаАвто: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-клиент', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-товар', { inverse: null, async: false })
});

export let ValidationRules = {
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  заправкаАвто: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заказ.validations.заправкаАвто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-заказ.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-k-u-r-s-a-v-a-y-a-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    заправкаАвто: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто', 'Заправка авто', {
      колТоплива: attr('Кол топлива', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'колТоплива' }),
    товар: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-товар', 'Товар', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    клиент: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-клиент', 'Клиент', {
      имя: attr('Имя', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-k-u-r-s-a-v-a-y-a-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    заправкаАвто: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто', 'Кол топлива', {
      колТоплива: attr('Кол топлива', { index: 1 })
    }, { index: -1, hidden: true }),
    товар: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-товар', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-клиент', 'Имя', {
      имя: attr('Имя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
