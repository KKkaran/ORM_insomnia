const { Category } = require("../models")

const categoryData = [
  {
    category_name:"Home & Kitchen"
  },
  {
    category_name:"Appliances"

  },
  {
    category_name:"Office"

  },
  {
    category_name:"Video Games"
  },
  {
    category_name:"Baby Stuff"
  }
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;


// {
//   "product_name": "Baby Babbler",
//   "price": 10.00,
//   "category_id": 5,
//   "tagIds": [1, 5]
// }