import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-банк-данные-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заказ-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заказ-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заказ-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заказ-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заказ-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-клиент-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-клиент-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-клиент-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-клиент-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-клиент-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-колонка-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-колонка-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-колонка-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-колонка-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-колонка-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-товар-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-товар-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-товар-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-товар-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-товар-e/new' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-чек-l');
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-чек-e',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-чек-e/:id' });
  this.route('i-i-s-k-u-r-s-a-v-a-y-a-чек-e.new',
  { path: 'i-i-s-k-u-r-s-a-v-a-y-a-чек-e/new' });
});

export default Router;
