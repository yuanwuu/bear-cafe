const Drink = require('../../models/Drink');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const drinks = await Drink.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder & populate the categories
    drinks.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const drink = await Drink.findById(req.params.id);
    res.status(200).json(drink);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}