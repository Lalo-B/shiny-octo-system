const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Wiki } = require('../models');

/**
 * @route GET /api/wikis
 * @desc Get all wiki entries
 */
router.get('/', async (req, res) => {
  try {
    const wikis = await Wiki.findAll();
    res.json(wikis);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/wikis/:id
 * @desc Get a single wiki entry by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const wiki = await Wiki.findByPk(req.params.id);
    if (!wiki) {
      return res.status(404).json({ message: 'Wiki entry not found' });
    }
    res.json(wiki);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/wikis
 * @desc Create a new wiki entry
 */
router.post('/', async (req, res) => {
  try {
    const newWiki = await Wiki.create(req.body);
    res.status(201).json(newWiki);
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
 * @route PUT /api/wikis/:id
 * @desc Edit an existing wiki entry by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const wiki = await Wiki.findByPk(req.params.id);
    if (!wiki) {
      return res.status(404).json({ message: 'Wiki entry not found' });
    }

    const updatedWiki = await wiki.update(req.body);
    res.json(updatedWiki);
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
 * @route DELETE /api/wikis/:id
 * @desc Delete a wiki entry by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const wiki = await Wiki.findByPk(req.params.id);
    if (!wiki) {
      return res.status(404).json({ message: 'Wiki entry not found' });
    }

    await wiki.destroy();
    res.status(200).json({ message: 'Wiki entry deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
