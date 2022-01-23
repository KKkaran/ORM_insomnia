const sequelize = require('../config/connection');
const seedCategory = require('./CategoryData');
const {seedProduct,seedProductTag} = require('./ProductData')
const seedTags = require('./TagData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedTags();

  await seedProduct();

  await seedProductTag();

  process.exit(0);
};

seedAll();
