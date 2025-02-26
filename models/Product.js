const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    product_name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:(t)=>{
        if(typeof(t) !== DataTypes.DECIMAL){
          return false;
        }
        return true
      }
    },
    stock:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      validate:()=>{
        if(typeof(t) !== DataTypes.INTEGER){
          return false;
        }
        return true
      }
    },
    category_id:{
      type:DataTypes.INTEGER,
      references:{
        model:"category",
        key:"id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
