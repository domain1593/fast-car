var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    category: { type: { CategorySchema }, required: true, max: 100 },
  }, { collection: 'products' }
);

var CategorySchema = new Schema(
  {
    standart: { type: [CharacteristicsSchema], required: true, max: 100 },
    luxury: { type: [CharacteristicsSchema], required: true, max: 100 },
  }, { collection: 'products' }
);

var CharacteristicsSchema = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true, max: 100 }
  }, { collection: 'products' }
);

module.exports = mongoose.model('Product', ProductSchema);
