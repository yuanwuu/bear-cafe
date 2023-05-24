require('dotenv').config();
require('./database');

const Category = require('../models/Category');
const Item = require('../models/Item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Cold Coffees', sortOrder: 10},
    {name: 'Hot Coffees', sortOrder: 20},
    {name: 'Refreshments', sortOrder: 30},
    {name: 'Hot Teas', sortOrder: 40},
    {name: 'Frappuccino', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Gifts', sortOrder: 70}
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Cold Brew', img: 'https://img.freepik.com/premium-psd/17-oz-plastic-cup-mockup-falling_1332-18208.jpg?w=2000', category: categories[0]._id, price: 5.95},
    {name: 'Cold Brew #2', img: 'https://img.freepik.com/premium-psd/17-oz-plastic-cup-mockup-falling_1332-18208.jpg?w=2000', category: categories[0]._id, price: 5.95},
    {name: 'Cold Brew', img: 'https://img.freepik.com/premium-psd/17-oz-plastic-cup-mockup-falling_1332-18208.jpg?w=2000', category: categories[0]._id, price: 5.95},
    {name: 'Hot Coffee', img: 'https://t4.ftcdn.net/jpg/02/79/44/59/360_F_279445954_zRf9egYNztHx9820Lg9u8tDR64rBbyoR.jpg', category: categories[1]._id, price: 3.95},
    {name: 'Hot Coffee', img: 'https://t4.ftcdn.net/jpg/02/79/44/59/360_F_279445954_zRf9egYNztHx9820Lg9u8tDR64rBbyoR.jpg', category: categories[1]._id, price: 3.95},
    {name: 'Hot Coffee', img: 'https://t4.ftcdn.net/jpg/02/79/44/59/360_F_279445954_zRf9egYNztHx9820Lg9u8tDR64rBbyoR.jpg', category: categories[1]._id, price: 3.95},
    {name: 'Refreshments', img: 'https://t3.ftcdn.net/jpg/05/49/41/16/360_F_549411685_xLLYp5GCkez96PrWrEqdrejvjDadgGNa.jpg', category: categories[2]._id, price: 3.95},
    {name: 'Refreshments', img: 'https://t3.ftcdn.net/jpg/05/49/41/16/360_F_549411685_xLLYp5GCkez96PrWrEqdrejvjDadgGNa.jpg', category: categories[2]._id, price: 4.95},
    {name: 'Hot Tea', img: 'https://img.freepik.com/premium-psd/reusable-cork-coffee-cup-mockup_53876-98721.jpg?w=2000', category: categories[3]._id, price: 3.95},
    {name: 'Hot Tea', img: 'https://img.freepik.com/premium-psd/reusable-cork-coffee-cup-mockup_53876-98721.jpg?w=2000', category: categories[3]._id, price: 3.95},
    {name: 'Hot Tea', img: 'https://img.freepik.com/premium-psd/reusable-cork-coffee-cup-mockup_53876-98721.jpg?w=2000', category: categories[3]._id, price: 3.95},
    {name: 'Frappuccino', img: 'https://www.dessertfortwo.com/wp-content/uploads/2022/01/Chocolate-Chip-Frappuccino-5-720x720.jpg', category: categories[4]._id, price: 5.95},
    {name: 'Frappuccino', img: 'https://www.dessertfortwo.com/wp-content/uploads/2022/01/Chocolate-Chip-Frappuccino-5-720x720.jpg', category: categories[4]._id, price: 5.95},
    {name: 'Desserts', img: 'https://unblast.com/wp-content/uploads/2018/12/Cup-with-Cookies-Mockup-3.jpg', category: categories[5]._id, price: 5.95},
    {name: 'Desserts', img: 'https://unblast.com/wp-content/uploads/2018/12/Cup-with-Cookies-Mockup-3.jpg', category: categories[5]._id, price: 5.95},
    {name: 'Desserts', img: 'https://unblast.com/wp-content/uploads/2018/12/Cup-with-Cookies-Mockup-3.jpg', category: categories[5]._id, price: 5.95},
    {name: 'Desserts', img: 'https://unblast.com/wp-content/uploads/2018/12/Cup-with-Cookies-Mockup-3.jpg', category: categories[5]._id, price: 5.95},
    {name: 'gift', img: 'https://www.graphicpear.com/wp-content/uploads/2018/06/Gift-Box-Mockup-6.jpg', category: categories[6]._id, price: 8.95},
    {name: 'gift', img: 'https://www.graphicpear.com/wp-content/uploads/2018/06/Gift-Box-Mockup-6.jpg', category: categories[6]._id, price: 8.95},
    {name: 'gift', img: 'https://www.graphicpear.com/wp-content/uploads/2018/06/Gift-Box-Mockup-6.jpg', category: categories[6]._id, price: 8.95},
    {name: 'gift', img: 'https://www.graphicpear.com/wp-content/uploads/2018/06/Gift-Box-Mockup-6.jpg', category: categories[6]._id, price: 8.95},
    {name: 'gift', img: 'https://www.graphicpear.com/wp-content/uploads/2018/06/Gift-Box-Mockup-6.jpg', category: categories[6]._id, price: 8.95},
  ]);

  console.log(items)

  process.exit();

})();