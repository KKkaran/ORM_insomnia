const router = require('express').Router();
const { Category, Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[
      {
        model: Product,
        include:{
          model:Category,
          attributes:["category_name"]
        }
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include:[
      {
        model: Product,
        include:{
          model:Category,
          attributes:["category_name"]
        }
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbData=>res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No tags found with this id' });
      return;
    }
    console.log(dbUserData)
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No Tags found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
