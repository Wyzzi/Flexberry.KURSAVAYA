import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.caption'),
          title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.title'),
          children: [{
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-колонка-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-колонка-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-колонка-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-клиент-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-клиент-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-чек-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-чек-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-заказ-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заказ-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-товар-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-товар-l.title'),
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l',
            caption: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l.caption'),
            title: i18n.t('forms.application.sitemap.k-u-r-s-a-v-a-y-a.i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})