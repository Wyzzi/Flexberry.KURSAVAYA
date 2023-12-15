import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРожд: DS.attr('date'),
  имя: DS.attr('string'),
  телНомер: DS.attr('number'),
  фамилия: DS.attr('string'),
  банкДанные: DS.belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРожд: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-клиент.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  телНомер: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-клиент.validations.телНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  банкДанные: {
    descriptionKey: 'models.i-i-s-k-u-r-s-a-v-a-y-a-клиент.validations.банкДанные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-k-u-r-s-a-v-a-y-a-клиент', {
    имя: attr('Имя', { index: 0 }),
    телНомер: attr('Тел номер', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    банкДанные: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные', 'Банк данные', {
      номерКарт: attr('Номер карт', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерКарт' })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-k-u-r-s-a-v-a-y-a-клиент', {
    имя: attr('Имя', { index: 0 }),
    телНомер: attr('Тел номер', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    банкДанные: belongsTo('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные', 'Номер карт', {
      номерКарт: attr('Номер карт', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
