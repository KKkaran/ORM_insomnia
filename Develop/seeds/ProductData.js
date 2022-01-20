const { Product, ProductTag } = require("../models")

const productData = [
  {
    product_name : "Dishwasher",
    price: 200,
    stock: 12,
    category_id : 2,
  },
  {
    product_name : "Pacifier",
    price: 10,
    category_id : 5,
  },
  {
    product_name : "Baby Babbler",
    price: 60,
    stock: 15,
    category_id : 5,
  }
];

const seedProduct = () => Product.bulkCreate(productData)
const seedProductTag = ()=> ProductTag.bulkCreate([
        {
            product_id:1,
            tag_id:1
        },
        {
            product_id:1,
            tag_id:5
        },
        {
            product_id:2,
            tag_id:5
        },
        {
            product_id:3,
            tag_id:1
        },
        {
            product_id:3,
            tag_id:2
        },
        {
            product_id:3,
            tag_id:5
        }
    ])


module.exports = {
    seedProduct : seedProduct,
    seedProductTag: seedProductTag
};


// {
//   "product_name": "Baby Babbler",
//   "price": 10.00,
//   "category_id": 5,
//   "tagIds": [1, 5]
// }