const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Owed_Amount } = require('../models');

/**
 * @route GET /api/owed_amounts
 * @desc Get all owed amounts
 */
router.get('/', async (req, res) => {
  try {
    const owedAmounts = await Owed_Amount.findAll();
    res.json(owedAmounts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/owed_amounts/:id
 * @desc Get a single owed amount by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const owedAmount = await Owed_Amount.findByPk(req.params.id);
    if (!owedAmount) {
      return res.status(404).json({ message: 'Owed amount not found' });
    }
    res.json(owedAmount);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/owed_amounts
 * @desc Create a new owed amount
 */
router.post('/', async (req, res) => {
  try {
    const newOwedAmount = await Owed_Amount.create(req.body);
    res.status(201).json(newOwedAmount);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      const errors = err.errors.map(e => e.message);
      return res.status(400).json({ message: 'Validation error', errors });
    }
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route PUT /api/owed_amounts/:id
 * @desc Edit an existing owed amount by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const owedAmount = await Owed_Amount.findByPk(req.params.id);
    if (!owedAmount) {
      return res.status(404).json({ message: 'Owed amount not found' });
    }

    const updatedOwedAmount = await owedAmount.update(req.body);
    res.json(updatedOwedAmount);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      const errors = err.errors.map(e => e.message);
      return res.status(400).json({ message: 'Validation error', errors });
    }
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route DELETE /api/owed_amounts/:id
 * @desc Delete an owed amount by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const owedAmount = await Owed_Amount.findByPk(req.params.id);
    if (!owedAmount) {
      return res.status(404).json({ message: 'Owed amount not found' });
    }

    await owedAmount.destroy();
    res.status(200).json({ message: 'Owed amount deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
