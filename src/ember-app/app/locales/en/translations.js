import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKURSAVAYAБанкДанныеLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l';
import IISKURSAVAYAЗаказLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заказ-l';
import IISKURSAVAYAЗаправБакLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l';
import IISKURSAVAYAЗаправкаАвтоLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l';
import IISKURSAVAYAКлиентLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-клиент-l';
import IISKURSAVAYAКолонкаLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-колонка-l';
import IISKURSAVAYAТоварLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-товар-l';
import IISKURSAVAYAЧекLForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-чек-l';
import IISKURSAVAYAБанкДанныеEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e';
import IISKURSAVAYAЗаказEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заказ-e';
import IISKURSAVAYAЗаправБакEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e';
import IISKURSAVAYAЗаправкаАвтоEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e';
import IISKURSAVAYAКлиентEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-клиент-e';
import IISKURSAVAYAКолонкаEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-колонка-e';
import IISKURSAVAYAТоварEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-товар-e';
import IISKURSAVAYAЧекEForm from './forms/i-i-s-k-u-r-s-a-v-a-y-a-чек-e';
import IISKURSAVAYAБанкДанныеModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-банк-данные';
import IISKURSAVAYAЗаказModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-заказ';
import IISKURSAVAYAЗаправБакModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак';
import IISKURSAVAYAЗаправкаАвтоModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто';
import IISKURSAVAYAКлиентModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-клиент';
import IISKURSAVAYAКолонкаModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-колонка';
import IISKURSAVAYAТоварModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-товар';
import IISKURSAVAYAЧекModel from './models/i-i-s-k-u-r-s-a-v-a-y-a-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные': IISKURSAVAYAБанкДанныеModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-заказ': IISKURSAVAYAЗаказModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак': IISKURSAVAYAЗаправБакModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто': IISKURSAVAYAЗаправкаАвтоModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-клиент': IISKURSAVAYAКлиентModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-колонка': IISKURSAVAYAКолонкаModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-товар': IISKURSAVAYAТоварModel,
    'i-i-s-k-u-r-s-a-v-a-y-a-чек': IISKURSAVAYAЧекModel
  },

  'application-name': 'KURSAVAYA',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'KURSAVAYA',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KURSAVAYA',
          title: 'KURSAVAYA'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'k-u-r-s-a-v-a-y-a': {
          caption: 'KURSAVAYA',
          title: 'KURSAVAYA',
          'i-i-s-k-u-r-s-a-v-a-y-a-колонка-l': {
            caption: 'Колонка',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l': {
            caption: 'Банк данные',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l': {
            caption: 'Заправка авто',
            title: ''
          },
          'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l': {
            caption: 'Заправ бак',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l': IISKURSAVAYAБанкДанныеLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заказ-l': IISKURSAVAYAЗаказLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l': IISKURSAVAYAЗаправБакLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l': IISKURSAVAYAЗаправкаАвтоLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-клиент-l': IISKURSAVAYAКлиентLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-колонка-l': IISKURSAVAYAКолонкаLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-товар-l': IISKURSAVAYAТоварLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-чек-l': IISKURSAVAYAЧекLForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e': IISKURSAVAYAБанкДанныеEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заказ-e': IISKURSAVAYAЗаказEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e': IISKURSAVAYAЗаправБакEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e': IISKURSAVAYAЗаправкаАвтоEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-клиент-e': IISKURSAVAYAКлиентEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-колонка-e': IISKURSAVAYAКолонкаEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-товар-e': IISKURSAVAYAТоварEForm,
    'i-i-s-k-u-r-s-a-v-a-y-a-чек-e': IISKURSAVAYAЧекEForm
  },

});

export default translations;
