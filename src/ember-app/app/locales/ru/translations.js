import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'KURSAVAYA',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KURSAVAYA',
          title: 'KURSAVAYA'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
