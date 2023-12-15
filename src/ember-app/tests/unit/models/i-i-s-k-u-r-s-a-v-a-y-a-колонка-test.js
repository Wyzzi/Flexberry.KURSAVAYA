import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-u-r-s-a-v-a-y-a-колонка', 'Unit | Model | i-i-s-k-u-r-s-a-v-a-y-a-колонка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-u-r-s-a-v-a-y-a-банк-данные',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-заказ',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-заправ-бак',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-заправка-авто',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-клиент',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-колонка',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-товар',
    'model:i-i-s-k-u-r-s-a-v-a-y-a-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
