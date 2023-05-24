const { Schema } = require('mongoose');

const drinkSchema = new Schema({
  drink: { type: String, required: true },
  size: { type: String, required: true },
  flavor: [{ type: String, required: true }],
  toppings: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = drinkSchema;