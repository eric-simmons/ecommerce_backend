const router = require('express').Router();
const { Category, Product } = require('../../models');
const sequelize = require('../config/connection')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      incude: [{ model: Product }]
    })
    res.status(200).json(allCategories)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(category)

    if(!category){
      res.status(404).json({ message : "No"})
    }
  }
  catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  }
  catch(error){
    res.status(400).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
