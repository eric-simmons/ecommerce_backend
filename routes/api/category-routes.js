const router = require('express').Router();
// const { ConnectionAcquireTimeoutError } = require('sequelize');
const { Category, Product } = require('../../models');
// const sequelize = require('../config/connection')

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

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(category)

    if (!category) {
      res.status(404).json({ message: "No" })
    }
  }
  catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(result)
  }
  catch (error) {
    res.status(500).json(error)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  console.log('delete route hit')
  try {
    const result = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(result)
  }
  catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
