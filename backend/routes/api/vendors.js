const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Vendor } = require('../models');

/**
 * @route GET /api/vendors
 * @desc Get all vendors
 */
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/vendors/:id
 * @desc Get a single vendor by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/vendors
 * @desc Create a new vendor
 */
router.post('/', async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json(newVendor);
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
 * @route PUT /api/vendors/:id
 * @desc Edit an existing vendor by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const updatedVendor = await vendor.update(req.body);
    res.json(updatedVendor);
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
 * @route DELETE /api/vendors/:id
 * @desc Delete a vendor by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    await vendor.destroy();
    res.status(200).json({ message: 'Vendor deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
