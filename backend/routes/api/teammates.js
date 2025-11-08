const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Teammate } = require('../models');

/**
 * @route GET /api/teammates
 * @desc Get all teammates
 */
router.get('/', async (req, res) => {
  try {
    const teammates = await Teammate.findAll();
    res.json(teammates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/teammates/:id
 * @desc Get a single teammate by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const teammate = await Teammate.findByPk(req.params.id);
    if (!teammate) {
      return res.status(404).json({ message: 'Teammate not found' });
    }
    res.json(teammate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/teammates
 * @desc Create a new teammate
 */
router.post('/', async (req, res) => {
  try {
    const newTeammate = await Teammate.create(req.body);
    res.status(201).json(newTeammate);
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
 * @route PUT /api/teammates/:id
 * @desc Edit an existing teammate by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const teammate = await Teammate.findByPk(req.params.id);
    if (!teammate) {
      return res.status(404).json({ message: 'Teammate not found' });
    }

    const updatedTeammate = await teammate.update(req.body);
    res.json(updatedTeammate);
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
 * @route DELETE /api/teammates/:id
 * @desc Delete a teammate by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const teammate = await Teammate.findByPk(req.params.id);
    if (!teammate) {
      return res.status(404).json({ message: 'Teammate not found' });
    }

    await teammate.destroy();
    res.status(200).json({ message: 'Teammate deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
