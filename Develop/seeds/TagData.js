const { Tag } = require('../models');

const tagData = [
  {
    tag_name:"Home"
  },
  {
    tag_name:"Entertainment"
  }, 
  {
    tag_name:"DIY"
  },
  {
    tag_name:"Work"
  },
  {
    tag_name:"Family"
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
