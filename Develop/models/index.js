// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//O2M
Category.hasMany(Product,{
  foreignKey:"category_id"
})
//O2O
Product.belongsTo(Category,{
  foreignKey:"category_id"
})
//M2M
Product.belongsToMany(Tag,{
  through:ProductTag,
  as: "",
  foreignKey:'product_id'
})
//M2M
Tag.belongsToMany(Product,{
  through:ProductTag,
  as:'',
  foreignKey:'tag_id'
})
//O2O
ProductTag.belongsTo(Product,{
  foreignKey:'product_id'
})
//O2M
Product.hasMany(ProductTag,{
  foreignKey:'product_id'
})
//O2O
ProductTag.belongsTo(Tag,{
  foreignKey:'tag_id'
})
//O2M
Tag.hasMany(ProductTag,{
  foreignKey:'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
