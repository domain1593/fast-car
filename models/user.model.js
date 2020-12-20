const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    product: { type: [CharacteristicsSchema] }
});

var CharacteristicsSchema = new Schema(
    {
        name: { type: String, required: true, max: 100 },
        price: { type: Number, required: true, max: 100 }
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
