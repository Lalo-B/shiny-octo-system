const express = require('express');
const router = express.Router();
// Assuming models are exported from ../models/index.js
const { Session } = require('../models');

/**
 * @route GET /api/sessions
 * @desc Get all sessions
 */
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.json(sessions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route GET /api/sessions/:id
 * @desc Get a single session by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @route POST /api/sessions
 * @desc Create a new session
 */
router.post('/', async (req, res) => {
  try {
    const newSession = await Session.create(req.body);
    res.status(201).json(newSession);
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
 * @route PUT /api/sessions/:id
 * @desc Edit an existing session by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    const updatedSession = await session.update(req.body);
    res.json(updatedSession);
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
 * @route DELETE /api/sessions/:id
 * @desc Delete a session by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    await session.destroy();
    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
