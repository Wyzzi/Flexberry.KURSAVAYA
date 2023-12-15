import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сумма: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  сумма: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-чек.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-чек.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-k-u-r-s-a-v-a-y-a-чек', {
    сумма: attr('Сумма', { index: 0 }),
    заказ: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-заказ', 'Заказ', {
      номерЗаказа: attr('Номер заказа', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерЗаказа' })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-k-u-r-s-a-v-a-y-a-чек', {
    сумма: attr('Сумма', { index: 0 })
  });
};
