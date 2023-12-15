import { Serializer as БанкДанныеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-u-r-s-a-v-a-y-a-банк-данные';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БанкДанныеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
