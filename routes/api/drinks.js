// const express = require('express');
// const router = express.Router();
// const drinksCtrl = require('../../controllers/api/drinks');

// // GET /api/drinks
// router.get('/', drinksCtrl.index);
// // GET /api/drinks/:id
// router.get('/:id', drinksCtrl.show);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Drink = require('../models/drinkModel');

// POST /api/drinks
router.post('/', async (req, res) => {
  try {
    const { drink, size, flavor, toppings } = req.body;

    // Create a new instance of the Drink model with the provided data
    const newDrink = new Drink({
      drink,
      size,
      flavor,
      toppings
    });

    // Save the new drink to the database
    const savedDrink = await newDrink.save();

    res.status(201).json(savedDrink);
  } catch (error) {
    console.error('Error saving drink data:', error);
    res.status(500).json({ error: 'An error occurred while saving the drink data.' });
  }
});

module.exports = router;
