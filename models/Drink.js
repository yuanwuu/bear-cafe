// const mongoose = require('mongoose');
// // Ensure the Category model is processed by Mongoose
// require('./Category');

// const drinkSchema = require('./drinkSchema');

// module.exports = mongoose.model('Drink', drinkSchema);

const mongoose = require('mongoose');
const drinkSchema = require('./path/to/drinkSchema');

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
